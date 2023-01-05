import { IHotel } from "./IHotel";

export class Hotel implements IHotel{
    hotelId!: number;
    hotelName!: string;
    description!: string;
    price!: number;
    rating!: number;
    imageUrl!: string;
    showNouveau!: boolean;
constructor( 
     hotelId:number,
    hotelName:string,
    description:string,
    price:number,
    rating:number,
    imageUrl:string,
    showNouveau:boolean){}


    getNewPrice(price:number): number{
    return price - 5 ;
    }

}