import a1 from './a1.png';
import a2 from './a2.png';
import a3 from './a3.png';
import a4 from './a4.png';

interface Image {
   id: number;
   url: string;
}

const slider: Image[] = [
   { id: 1, url: a1 },
   { id: 2, url: a2 },
   { id: 3, url: a3 },
   { id: 4, url: a4 },
];

export default slider;
