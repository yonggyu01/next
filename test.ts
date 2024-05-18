class 붕어빵 {
    private name: string;
    private id: number;
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
    public get붕어빵(): string {
      return this.name;
    }
  
    public getId(): number {
      return this.id;
    }

    public make붕어빵(): string {
      return this.name+0+this.id;
    } 
  }

const 단팥붕어빵 =  new 붕어빵('붕어빵', 1)





console.log(단팥붕어빵)
// console.log(단팥붕어빵.name)
// console.log(단팥붕어빵.id)

class 소금붕어빵 extends 붕어빵 {
    public salt() :void {
    alert('안녕 소금이야')
  }
  public get붕어빵() : string{
  return '안녕 나는 소금빵으로 바꿀거야'
  }
}
const salt = new 소금붕어빵('소금친 붕어빵',2)

console.log(salt.get붕어빵())


  type CoffeeCup ={
    shots : number,
    hasmilk : boolean
  }
  const myshot :number = 2
  let coffeebean : number = 7
  function makecoffee (shot: number) :CoffeeCup {
    if(coffeebean< shot * myshot ){
      throw new Error('coffee enough')
    }
    coffeebean-=shot*myshot
    
    return {
      shots:shot,
      hasmilk:false
    }
  }
  console.log(makecoffee(2))


  class Animal {
     name : string; 
     id : number;
    constructor(name : string, id : number){
      this.name = name,
      this.id = id
    }
    cry():string {
      return '안녕 나는 동물이야'
    } 
  }
  class Cat extends Animal{
    super(name:string,id:number){
      this.name=name,
      this.id=id
    }
    cry(): string {
      console.log('안녕 ㅠㅠ 고양이야')
      return '안녕 이제 고양이가 되었다.'
    }
    namechange(name: string) :void {
      this.name = name
      console.log(`이름 바뀜 ${this.name}`)
    }
  }
  let animal = new Animal('동물',0)
  let cat = new Cat('얼룩고양이',1)
  console.log(cat.name)
  cat.namechange('노랑고양이')

  type Action = "add" | "substract" | "divide"

  function calcul(action:Action, a:number, b:number) :any {
    let result = 0
    switch(action){
      case "add" :
      return result =a+b
      case "substract":
        result=a-b
      break;
      default : 
      throw new Error ('qqq')
    }
  }

  console.log(calcul("add",5,1))


  type Arrow = "up" | "down" | "left" | "right"
  class moving {
    x : number;
    y : number;
    constructor(x:number,y:number){
      this.x = x,
      this.y = y
    }
    move(command : Arrow){
      switch(command){
        case "up":
          this.y++
          break;
        case "down":
          this.y--
          break;
        case "left":
          this.x--
          break;
        case "right":
          this.x++
          break;
        
      }
      console.log(this.x, this.y)
    }
  }
  let mov = new moving(0,0)
  mov.move('up')
  mov.move('up')