//Define data
let data = [
  { name: 'Rainne'    , rating: 8 },
  { name: 'Buddy'    , rating: 7 },
  { name: 'Paddy'   , rating: 3 },
  { name: 'Sticky', rating: 9 },
  { name: 'Midnight'  , rating: 5 },
  { name: 'Leo'  , rating: 6 }
];


let width = 400,
    height = 300;

 // missed a  section here 
let svg = d3.select('body')
          .append('svg')
          .attr("width", width)
          .atrr('height', height)
          .style('background', 'lightyellow')


let yScale = d3.scaleLinear()
            .domain([0,10])
            .range([height - margin.bottom, margin.top])




let xScale = d3.scaleBand()
            .domain(data.map(d=> d.name))
            .range([margin.left, width-margin.right])
            .padding(0.5)

let yAxis = svg.append('g')
            .call(d3.axisLeft().scale(yScale))
            .attr('transform', 'translate(${margin.left},0)')




