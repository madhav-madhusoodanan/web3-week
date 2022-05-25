import { Vector3, TextGeometry, Mesh } from "three";
const centre = new Vector3(0, 0, 0)

export const Blanka = (text, font, material, location, scale, octant, objectsToTouch, group) => {
        /* octant is the 3d version of quadrant
            its like, [1, 1, -1]  */

        /* Octant normalization */
    if(octant) octant = octant.map(elem => elem / Math.abs(elem))
    if(!font) blankaFont(font)
    const developer = new TextGeometry(text, {
        font,
        size: 0.5,
        height: 0.2,
        curveSegments: 5,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments: 5,
    });
    developer.center()
    const developertext = new Mesh(developer, material);

    if(location) {
        developertext.position.x = location[0]
        developertext.position.y = location[1]
        developertext.position.z = location[2]
    }
    else {
        location = []
        location[0] = Math.random() * 5 + 5;
        location[0] *= octant[0]
            
        location[1] = Math.random() * 8 + 5;
        location[1] *= octant[1]
        
        location[2] = Math.random() * 8 + 5;
        location[2] *= octant[2]
        
        developertext.position.x = location[0];
        developertext.position.y = location[1];
        developertext.position.z = location[2];
        
        developertext.lookAt(centre);
    }

    if(!scale) scale = 1 + Math.random() * 2;
	developertext.scale.set(scale, scale, scale);
    objectsToTouch.push(developertext)

    group.add(developertext);     
}
