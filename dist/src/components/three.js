import {
    Group,
    Scene,
    Mesh,
    // FontLoader,
    TextGeometry,
    WebGLRenderer,
    PerspectiveCamera,
    Raycaster,
    MeshNormalMaterial,
    TorusGeometry,
    BoxGeometry,
    AudioLoader,
    AudioListener,
    AudioContext,
    Audio,
    Vector3,
    Vector2,
} from "three"
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js"
import { Blanka } from "./scripts/text/font"
import Anurati from "./scripts/static/anurati.json"
import BlankaFont from "./scripts/static/blanka.json"
import StayAudio from "./scripts/static/stay.ogg"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
// import { GUI } from "dat.gui";

/*
 * How to get a font:
 * Facetype.js -> generate a json file
 * or use node_modules/three/examples/fonts file
 */

/**
 * Base
 */
// Debug
// const gui = new GUI();

// Canvas
const canvas = document.getElementById("webgl")

// Scene
const scene = new Scene()
const group = new Group()
const objectsToTouch = []
const objectsToRotate = []

/* Raycaster */
const raycaster = new Raycaster()
let intersects = []
const didClick = []

/**
 * Textures
 */
const material = new MeshNormalMaterial()
const fontLoader = new FontLoader()
fontLoader.parse(Anurati, (font) => {
    const madhav = new TextGeometry("WEBB", {
        font,
        size: 1,
        height: 0.2,
        curveSegments: 5,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: 5,
    })

    const madhusoodanan = new TextGeometry("WEEK", {
        font,
        size: 1,
        height: 0.2,
        curveSegments: 5,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: 5,
    })

    // material.matcap = new TextureLoader().load("textures/matcaps/1.png");
    madhav.center()
    madhusoodanan.center()
    const first = new Mesh(madhav, material)
    const last = new Mesh(madhusoodanan, material)
    first.position.y = 1.5
    first.rotation.set(0, 0, 0)
    last.rotation.set(0, 0, 0)
    group.add(first, last)
    // gui.add(first.position, "y").min(0).max(10).step(0.001);

    const donutGeometry = new TorusGeometry(0.3, 0.2, 20, 45)
    for (let index = 0; index < 100; index++) {
        const donut = new Mesh(donutGeometry, material)

        donut.position.x = (Math.random() - 0.5) * 60
        donut.position.y = (Math.random() - 0.5) * 60

        let z = (Math.random() - 0.5) * 60
        z > 0 ? (z += 5) : (z -= 5)
        donut.position.z = z
        donut.rotation.x = Math.random() * Math.PI
        donut.rotation.y = Math.random() * Math.PI

        const scale = Math.random() * 3
        donut.scale.set(scale, scale, scale)

        objectsToRotate.push(donut)
        group.add(donut)
    }

    const cubeGeometry = new BoxGeometry(1, 1, 1)
    for (let index = 0; index < 100; index++) {
        const cube = new Mesh(cubeGeometry, material)

        cube.position.x = (Math.random() - 0.5) * 60
        cube.position.y = (Math.random() - 0.5) * 60

        let z = (Math.random() - 0.5) * 60
        z > 0 ? (z += 5) : (z -= 5)
        cube.position.z = z
        cube.rotation.x = Math.random() * Math.PI
        cube.rotation.y = Math.random() * Math.PI

        const scale = Math.random() * 3
        cube.scale.set(scale, scale, scale)

        objectsToRotate.push(cube)
        group.add(cube)
    }
})
fontLoader.parse(BlankaFont, (font) => {
    Blanka(
        "Yeah its time to dream",
        font,
        material,
        [0, -1.2, 0],
        1,
        undefined,
        objectsToTouch,
        group
    )

    /* skills */
    Blanka(
        "  MERN\n     Stack\ndeveloper",
        font,
        material,
        undefined,
        undefined,
        [1, -1, -1],
        objectsToTouch,
        group
    )
    Blanka(
        "  Web3\nDeveloper",
        font,
        material,
        undefined,
        undefined,
        [-1, 1, -1],
        objectsToTouch,
        group
    )

    Blanka(
        "  React\n     Native\ndeveloper",
        font,
        material,
        undefined,
        undefined,
        [1, -1, 1],
        objectsToTouch,
        group
    )
    Blanka(
        "CSE\n@BITS Pilani",
        font,
        material,
        undefined,
        undefined,
        [-1, 1, 1],
        objectsToTouch,
        group
    )
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}
const mouse = new Vector2()

scene.add(group)
/**
 * Camera
 */
// Base camera
const camera = new PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
if (sizes.width / sizes.height < 0.875) {
    group.rotation.z = -Math.PI / 2
} else {
    group.rotation.z = 0
}
camera.position.z = 15
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
// controls.maxDistance = 30

const listener = new AudioListener()
camera.add(listener)

// create a global audio source
const sound = new Audio(listener)

// load a sound and set it as the Audio object's buffer
const audioLoader = new AudioLoader()
audioLoader.load(StayAudio, (buffer) => {
    sound.setBuffer(buffer)
    sound.setLoop(true)
    sound.setVolume(0)
    // sound.play();
})

/**
 * Renderer
 */
const renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/* event handlers */
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    if (sizes.width / sizes.height < 0.875) {
        camera.position.z = 20
        group.rotation.z = -Math.PI / 2
    } else {
        camera.position.z = 12
        group.rotation.z = 0
    }
    camera.aspect = sizes.width / sizes.height
    renderer.setSize(sizes.width, sizes.height)
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

if (sizes.width / sizes.height < 0.875) {
    camera.position.z = 20
    group.rotation.z = -Math.PI / 2
}

window.addEventListener("mousemove", (event) => {
    // const context = new Context()

    mouse.x = (event.clientX / sizes.width) * 2 - 1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1
})
let switchAudio = false
window.addEventListener("click", () => {
    if (!switchAudio) {
        sound.setVolume(1)
        sound.play()
        switchAudio = true
        console.log("flipped")
    }
    const Context = AudioContext.getContext()
    Context.resume()
    /* to fill up the didClick function and check if all em clicked */
    intersects.forEach(
        (intersect, i) => (didClick[i] = didClick[i] || intersect.length)
    )
    console.log(didClick)
    if (
        didClick.reduce((prev, curr) => prev + Math.min(curr, 1)) ==
        didClick.length
    ) {
        /* That is if all elemeents have 1 */
        console.log("WOOOOOOOOOOO")
    }
})

/**
 * Animate
 */
let time = 0
const tick = () => {
    // raycaster updates
    raycaster.setFromCamera(mouse, camera)
    intersects = objectsToTouch.map((obj) => raycaster.intersectObject(obj))

    objectsToRotate.forEach((obj, index) => {
        obj.rotation.x += (index % 5) * 0.001
        obj.rotation.y += (index % 5) * 0.001
    })

    time += 0.01
    if (sizes.width / sizes.height < 0.875) {
        group.rotation.z = -Math.PI / 2
    } else {
        group.rotation.z = 0
    }
    group.rotation.z += Math.sin(time) * 0.4
    group.rotation.x = Math.cos(time) * 0.3
    if (time > Math.PI * 2) time = 0

    // Update controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
