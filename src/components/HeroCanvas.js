import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

let img1;
let img2;
let layer;
const aspectRatio = 464 / 802;
const initialWidth = Math.round((window.innerWidth - 160) / 2);
const initialHeight = Math.round(aspectRatio * initialWidth);
let width = initialWidth;
let height = initialHeight;

// const Input = ({ width, setWidth }) => {

//   const [max, setMax] = useState(0)

//   useEffect(() => {

//       setMax(window.innerWidth)

//   }, [])

//   return (
//       <input
//           type = 'range'
//           min = '1'
//           max = {max}
//           value = {width}
//           onChange = {e => setWidth(e.target.value)}
//       />
//   )

// }

export default function CanvasVis() {
  // const [img1, setImg1] = useState();
  // const [img2, setImg2] = useState();
  // const [layer, setLayer] = useState();
  let alphaC;
  const rad = 200;
  // const initialWidth = Math.round((window.innerWidth - 160) / 2);
  // const initialHeight = Math.round(aspectRatio * initialWidth);

  // const [width, setWidth] = useState(100);
  // const [height, setHeight] = useState(100);

  const preload = (p5) => {
    img1 = p5.loadImage('Enscape_2022-08-06-10-08-42 1.png');
    img2 = p5.loadImage('Enscape_2022-08-06-10-10-30 1.png');
    // setImg1(img1data);
    // setImg2(img2data);
  };

  const windowResized = (p5) => {
    const newWidth = Math.floor((window.innerWidth - 160) / 2);
    const newHeight = Math.round(aspectRatio * newWidth);
    // setWidth(newWidth);
    // setHeight(newHeight);
    width = newWidth;
    height = newHeight;
    layer = p5.createGraphics(width, height);
    layer.image(img2, 0, 0, width, height);
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 1000).parent(canvasParentRef);
    alphaC = p5.color(0, 0);
    p5.pixelDensity(1);
    p5.frameRate(this.fr);
    layer = p5.createGraphics(width, height);
    layer.image(img2, 0, 0, width, height);
    // setLayer(newLayer);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  const draw = (p5) => {
    p5.clear();

    p5.noStroke();
    p5.image(img1, 0, 0, width, height);

    p5.image(layer, 0, 0);

    if (p5.mouseIsPressed) {
      p5.noFill();
      p5.stroke('gray');
      p5.ellipse(p5.mouseX, p5.mouseY, rad * 2, rad * 2);
      p5.line(p5.mouseX - 10, p5.mouseY, p5.mouseX + 10, p5.mouseY);
      p5.line(p5.mouseX, p5.mouseY - 10, p5.mouseX, p5.mouseY + 10);
    }
  };
  const mouseDragged = (p5) => {
    for (let x = p5.mouseX - rad; x < p5.mouseX + rad; x++) {
      for (let y = p5.mouseY - rad; y < p5.mouseY + rad; y++) {
        if (p5.dist(x, y, p5.mouseX, p5.mouseY) < rad && x > 0 && x <= width) {
          layer.set(x, y, alphaC);
        }
      }
    }
    layer.updatePixels();
  };
  return (
    <div>
      <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
        mouseDragged={mouseDragged}
        windowResized={windowResized}
      />
    </div>
  );
}
