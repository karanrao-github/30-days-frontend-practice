function clicked() {
    // To change HTML properties
    /**
     * After clicking on the button,
     * content inside it will change
     * from "SUBSCRIBE" to "SUBSCRIBED" 
     * */ 
    document.getElementById('btn').innerHTML = 'SUBSCRIBED';

    // To change CSS properties
    document.getElementById('btn').style.cssText = 'background: red; border-color: red; ';

//     document.getElementById('btn').innerHTML = 'SUBSCRIBE';
//     document.getElementById('btn').style.cssText = 'background: transparent; border-color: orange; ';
 }