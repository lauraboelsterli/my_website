let numbers = [4, 10, 18, 23, 42];
colors = d3.schemeCategory10; // https://github.com/d3/d3-scale-chromatic

svg = d3.select('body')
  .append('svg')
    .attr('width', 500)
    .attr('height', 500);

circle = svg.selectAll('circle')
  .data(numbers)
  .enter()
  .append('circle')
  .attr('cx', (d,i) => d*5)
  .attr('cy', 100)
  .attr('r', 5)
  .attr('fill', (d,i) => colors[i])

text = svg.selectAll('text')
      .data(numbers)
      .enter()
      .append('text')
      .attr('x', (d,i) => d*5)
      .attr('y', 80)
      .text(d => d)
      .style('text-anchor', 'middle')
      .style('font-family', 'Arial')