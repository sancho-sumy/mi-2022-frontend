import ItemBreedsImg from './item-breeds.png';
import ItemVotingImg from './item-voting.png';
import ItemGalleryImg from './item-gallery.png';

const sectionsList = [
  {
    name: 'voting',
    label_en: 'Voting',
    image: ItemVotingImg,
    background: '#B4B7FF',
    path: '/voting',
    location: 'mainMenu',
  },
  {
    name: 'breeds',
    label_en: 'Breeds',
    image: ItemBreedsImg,
    background: '#97EAB9',
    path: '/breeds',
    location: 'mainMenu',
  },
  {
    name: 'gallery',
    label_en: 'Gallery',
    image: ItemGalleryImg,
    background: '#FFD280',
    path: '/gallery',
    location: 'mainMenu',
  },
  {
    name: 'breedsInfo',
    label_en: 'Breeds',
    path: '/breeds/info',
    mainMenuItem: false,
  },
  {
    name: 'likes',
    label_en: 'Likes',
    image: 'icon-like',
    background: '#FFF',
    path: '/likes',
    location: 'header',
  },
  {
    name: 'favourites',
    label_en: 'Favourites',
    image: 'icon-fav',
    background: '#FFF',
    path: '/favourites',
    location: 'header',
  },
  {
    name: 'dislikes',
    label_en: 'Dislikes',
    image: 'icon-dislike',
    background: '#FFF',
    path: '/dislikes',
    location: 'header',
  },
];

export default sectionsList;
