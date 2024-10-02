export const isPresentInFavorite = ( favorites, restaurent)=>{
    for(let item in favorites){
        if(item.id === restaurent.id){
            return true;
        }
    }
}