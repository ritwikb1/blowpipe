class Ball{
    constructor(x, y, r){
        var ball_options = {
            restitution: 0.3,
            friction: 0,
            density: 0.2
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(x, y, r, ball_options)
        World.add(world, this.body)
        ellipse(RADIUS)
    }
    show(){
        ellipse(this.body.position.x,this.body.position.y,40,40);
    }
}