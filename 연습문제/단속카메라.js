function solution(routes) {
    routes.sort((a,b) => a[1]-b[1]);
    
    let camera = 1;
    
    let value = routes.shift()[1];
    
    while(routes.length) {
        if(routes[0][0] <= value && routes[0][1] >= value) {
            routes.shift();
        } else {
            value = routes.shift()[1];
            camera++;
        }
    }
    return camera;
}
