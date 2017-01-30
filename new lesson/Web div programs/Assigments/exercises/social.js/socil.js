var instaUser = {
    
     Name: "MK",
     eMail: "ex@gmail.com",
     faceBookAcc: "Mohamad Kabbani",
     age: 22,
     instaUserName: "Mkabbani",
     Followers: 24,
     Folowing: 225,
     picNum: 200,
     Friends: [
         {
             Name: "hamza jiji",
             eMail: "ex@gmail.com",
             faceBookAcc: "hamza",
             age: 12,
             instaUserName: "H.mazz",
             Followers: 1959,
             Folowing: 2665,
             picNum: 325,
         }
    ],
         // ...etc...//

     upLoadPic: function () {
         console.log ('Picture is being Uplaoded');
         this.picNum++;
     }

}
instaUser.upLoadPic();

console.log(instaUser.picNum);
instaUser.upLoadPic();
console.log(instaUser.picNum);