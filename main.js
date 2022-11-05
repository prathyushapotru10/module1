class main
{
    constructor(FName1,LName1,Email,pd,ReEnterpd,Ptext)
    {

    this.FN=FName1;
    this.LN=LName1;
    this.email=Email;
    this.PWD=pd;
    this.Password=ReEnterpd;
    this.Nts=Ptext;

    }
    getFN(){
        return this.FN;
    
    }
    getLN()
        return this.LN;
    }
    getemail(){
        return this.email;

    }
    getPWD()
    {
        return this.PWD;

    }
    getPassword()
    {
        return this.Password;


    }
    getNts()
    
    {
        return this.Nts;
    }

    setFN(FName1){
        this.FN=FName1;
    }
    setLN(LName1){
        this.LN=LName1;
    }
    setemail(Email){
        this.email=Email;

    }
    setPWD(pd){
        this.pd=PWD;
    }
    setPassword(ReEnterpdpd){
        this.ReEnter=Password;
    }
    setNts(Ptext){
        this.Ptext=Nts;
    }

}
let create= document.getElementById("login-form");
if(create) create.addEventListener('submit',login)

function login(e){
 e.preventDefault();
 let em1=document.getElementById("email").value;
 let pwd=document.getElementById("Password").value;

 let luser=new bala(em1,pwd);
 console.log(`${em1}`);
 console.log(`${pwd}`);
 create.reset();

}

let Reg=document.getElementById("regsiter-form");
if(Reg) Reg.addEventListener('submit',breg)

function breg(r){
    r.preventDefault();
    let FU1= document.getElementById("FN").value;
    let Lr=document.getElementById("LN").value;
    let eml1=document.getElementById("email").value;
    let pwd=document.getElementById("PWD").value;
    let pset=document.getElementById("Password").value;
    
    //let regi= new bala(FU1,Lr,eml1,pwd,pset);
    console.log(`${FU1}`);
    console.log(`${Lr}`);
    console.log(`${eml1}`);
    console.log(`${pwd}`);
    console.log(`${pset}`);   
    Reg.reset();
    
}

let UserN= document.getElementById("note-form");
if(UserN) UserN.addEventListener('submit',page)

function page(b){
    b.preventDefault();
    let Notepage= document.getElementById("Nts").value;
    //let usr= new bala(Notepage);
    console.log(`${Notepage}`);
    UserN.reset();

}