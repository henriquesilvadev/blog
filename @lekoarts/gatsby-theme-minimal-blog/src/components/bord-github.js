/* firebase firestore config ... leaving for reference
var config = {
  apiKey: "AIzaSyDUr8mAd7hdRhZTmvYiWQJBpBXE6IMRuvE",
  authDomain: "aggy-680df.firebaseapp.com",
  databaseURL: "https://aggy-680df.firebaseio.com",
  projectId: "aggy-680df",
  storageBucket: "aggy-680df.appspot.com",
  messagingSenderId: "732916661519"
};
firebase.initializeApp(config);

const db = firebase.firestore();
*/

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const width = 960;
const height = 146;
const cellSize = 17;
const sideMarginSize = (width - cellSize * 53) / 2;
const endDate = new Date();
const startDate = new Date()
startDate.setFullYear(startDate.getFullYear() - 1);
const parseDate = d3.timeParse("%Y-%m-%d");

var tooltip = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

const svg = d3.select("body")
  .selectAll("svg")
  .data(d3.range(startDate.getFullYear(), endDate.getFullYear()))
  .enter().append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + sideMarginSize + "," + (height - cellSize * 7 - 1) + ")")

addRects(svg, startDate, "base", d3.timeDays(startDate, endDate), d => d.getMonth() % 2 ? "#eee" : "#ddd");

const totalDaysInCurrentMonth = d3.timeDay.count(d3.timeMonth.floor(endDate), d3.timeMonth.ceil(endDate));
const partialWeeksLeftInCurrentMonth = Math.ceil((totalDaysInCurrentMonth - endDate.getDate()) / 7);

const monthLabels = svg.append('g')
  .attr('id', 'months')
  .selectAll('.month')
  .data(d3.timeMonths(startDate, endDate))
  .enter().append('text')
  .text(d => MONTHS[d.getMonth()])
  .attr('class', 'month')
  .attr('y', '-10')
  .attr('x', (d, i) => ( partialWeeksLeftInCurrentMonth * cellSize - 59 + ( (i + 1) * ( (width - ((width - cellSize * 53)) ) / 12 ))))

// const dayLabels
const dayLabels = svg.append('g')
  .attr('id', 'days')
  .selectAll('.day')
  .data([1, 3, 5])
  .enter().append('text')
  .text(d => DAYS[d])
  .attr('class', 'day')
  .attr('y', d => (d + 1) * cellSize - 2)
  .attr('x', sideMarginSize * -1 )

// TODO: tooltips

/* Hit my firestore quota too quickly, so had to scratch this.. 
const commitsRef = db.collection('commits');

const gitCommits = commitsRef.get()
  .then(snapshot => {
    const collection = [];
    snapshot.forEach(doc => {
      collection.push(doc.data());
    });
    return collection;
  })
  .catch(err => {
    console.error('Error getting documents', err)
  });

gitCommits.then(commits => {
  const dates = commits
    .filter(commit => commit.timestamp > stateDate.valueOf())
    .map(commit => new Date(commit.timestamp));
   
  console.log(commits.length, dates.length);
  
  addRects(svg, startDate, 'git', dates, '#FC315344');
});
*/

// still playing around with different ways to sync and access the json datastore

const gistURL = 'https://gist.githubusercontent.com/fielding/fd31d57b532bae857adc6b4fb704c639/raw/5f73ad3a2905912b781252d43efd489bc0831d5a/commits.json';

const dropboxURL = 'https://dl.dropbox.com/s/mxfevc4zwlbfi68/commits.json?dl=0';


d3.json(gistURL, (error, json) => {
  const dates = json
    .filter(commit => commit.timestamp > startDate.valueOf())
    .map(commit => new Date(commit.timestamp));

  console.log(json.length, dates.length);

  addRects(svg, startDate, "git", dates, "#FC315344");


});



// codepen contribution data
// TODO: Can I get more data than this? 
d3.xml('https://codepen.io/fielding/public/feed', (error, xml) => {
  if (error) throw error;
  const data = [].map.call(xml.querySelectorAll('item'), item => ({
    title: item.querySelector('title').textContent,
    link: item.querySelector('link').textContent,
    guid: item.querySelector('guid').textContent,
    creator: item.querySelector('creator').textContent,
    description: item.querySelector('description').textContent,
    subject: item.querySelector('subject').textContent,
    date: item.querySelector('date').textContent.replace(/\n| /gi, ''),
  }));
  
  const dates = data.map(item => new Date(item.date.substring(0, 10)));
  addRects(svg, startDate, "codepen", dates.filter(date => date > startDate), "#3186FC88");
});


// TODO rework color gradients
function addRects(parent, startDate, id, data, color) {
  parent.append("g")
    .attr("id", id)
    .attr("stroke", "#fff")
    .attr("stroke-width", "3px")
    .selectAll("rect")
    .data(data)
    .enter().append("rect")
    .attr("width", cellSize)
    .attr("height", cellSize)
    .attr("x", d => d3.timeWeek.count(startDate, d) * cellSize)
    .attr("y", d => d.getDay() * cellSize)
    .attr("fill", color)
   /*
    .on("mouseenter", function(d) {
      d3.select(this)
        .transition()
        .attr('x', d => 0)
        .attr('y', d => 0)
        .duration(1000)
      tooltip.transition()
        .duration(200)
        .style('opacity', .9);
      tooltip.html(d + '<br/>')
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28 ) + "px")
    })
    .on("mouseout", d => {
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    })
    */
    .datum(d3.timeFormat("%Y-%m-%d"))
}



// PREVIOUS DATA SOURCES/WRANGLING


/*
 github contribution data 
 supplied by github-scraper and uploaded to a gist

d3.json("https://gist.githubusercontent.com/fielding/3310126f950f69b6034ac9ff27a4e587/raw/75b36c559082595c803c214d12a75b87d2a56df4/fielding.json", (error, json) => {
  
  // this is really ugly, I need to rework the way contributions count for the day is handled
  // TODO: standardize contribution listing 
  const data = json.contrib_matrix;
  const contributions = Object.entries(data).reduce( (reduced, input) => {
    let count = input[1].count;
    if ( input[1].count > 0 ){
      for( let i = 0; i < input[1].count; i++){
       let date = new Date(input[0]);
       if (date > startDate) {
         reduced.push(date);
       }
      }
    }
    return reduced;
  }, []);
  
  addRects(svg, startDate, "github", contributions, "#FC315344");
  
});
*/

/*
// github contribution data from githubarchive.com BigQuery dump
// only contains Jan 2017 to Dec 2017, and doesn't include any data after I changed github user names in Dec.
d3.csv("https://gist.githubusercontent.com/fielding/fa086813fdd31ffb2a87aa037a0005a9/raw/4b8882bfa51d30449174ff5274e24aa332f6c678/justfielding-2017-github-activity.csv", (error, csv) => {
  if (error) throw error;
  
  const data = csv.map(d => new Date(d['created_at'].substring(0, 10)));
  data.filter(date => date > startDate)
  addRects(svg, startDate, "github", data.filter(date => date > startDate), "#FC315366");
});
*/