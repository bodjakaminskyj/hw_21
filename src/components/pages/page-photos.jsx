import  React from 'react';
import  item1 from '../images/photos/item1.jpg'
import  item2 from '../images/photos/item2.jpg'
import  item3 from '../images/photos/item3.jpg'
import  item4 from '../images/photos/item4.jpg'
import  item5 from '../images/photos/item5.jpg'
import  item6 from '../images/photos/item6.jpg'
import  item7 from '../images/photos/item7.jpg'
import  item8 from '../images/photos/item8.jpg'
import  item9 from '../images/photos/item9.jpg'
import  item10 from '../images/photos/item10.jpg'
import  item11 from '../images/photos/item11.jpg'

const photos = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11]

export const Photos = () => {
    return(
        <div className="photos">
             {photos.map(item =>( 
                <div key={item} className="photo">
                    <img src={item} alt={item}/>
                </div>
            ))}
        </div>
    )
}