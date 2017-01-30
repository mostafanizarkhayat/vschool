var shopper = {
    veg: "batata",
    num: 1234,
    isAdmin:true, 
    MK: function (veg){
        if (this.isAdmin)
            return true;
    }
}