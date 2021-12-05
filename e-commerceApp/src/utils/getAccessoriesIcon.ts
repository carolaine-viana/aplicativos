import JacketSvg from '../assets/svgs/jackets.svg';
import NewsSvg from '../assets/svgs/news.svg';
import PantsSvg from '../assets/svgs/pants.svg';
import TopsSvg from '../assets/svgs/tops.svg';

export function getAccessoriesIcon(type: string){
    switch(type){
        case 'Jackets':
            return JacketSvg;
        case 'Tops':
            return TopsSvg;
        case 'Pants':
            return PantsSvg;
    }

}