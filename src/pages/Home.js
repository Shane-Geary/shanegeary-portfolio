import React, { Component } from 'react';

class Home extends Component {
    render() {
	    return (
			<div id="wrapper" class="fade-in">

					<div id="intro">
						<h1>Shane<br />
						Geary</h1>
						<h3>Portfolio</h3>
						<ul class="actions">
							<li><a href="#header" class="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
						</ul>
					</div>

					<header id="header">
						<h1 class="logo">About Me</h1>
					</header>

					<nav id="nav">
						<ul class="links">
							<li class="active"><a href="index.html">About Me</a></li>
							<li><a href="generic.html">Technical Projects</a></li>
							<li><a href="elements.html">Contact Me</a></li>
						</ul>
						<ul class="icons">
							<li><a href="https://www.linkedin.com/in/shanegeary/" class="icon brands fa-linkedin"><span class="label">Twitter</span></a></li>
							<li><a href="https://github.com/ShaneG25" class="icon brands fa-github"><span class="label">Facebook</span></a></li>
							<li><a href="https://medium.com/@shanegeary1994" class="icon brands fa-medium"><span class="label">GitHub</span></a></li>
						</ul>
					</nav>

					<div id="main">

							<article class="post featured">
								<header class="major">
									<span class="date">Bio</span>
									<h2>A Bit <br />
									About Myself</h2>
									<p>My name is Shane Geary, born and raised in Colorado. Growing up with both parents being musicians 
                                    as well as both working in the music industry, I found myself following in their footseteps and learned 
                                    multiple instruments through my childhood. Down the road, I evolved into music production and sound design using computer software. 
                                    <br />
									From there I found an interest for programming that turned into a passion as I enrolled with <a href="https://flatironschool.com/">The Flatiron School</a> in
                                    their Full-Stack Software Engineering course where I learned backend languages like Ruby, Ruby on Rails, SQL, and ActiveRecord.
                                    As well as frontend languages like HTML, CSS, JavaScript, React.js and other technologies. I did several projects using these languages 
                                    during my time there, and you can view a list of them with links to the repositories stored on GitHub <a href="generic.html">here</a>
                                    </p>
								</header>
								<a class="image main"><img src="images/July 2021 Grads_Part10910241024_1.jpg" alt="" /></a>
								<ul class="actions special">
									<li><h2 class="logo">Flatiron Certificate</h2></li>
								</ul>
							</article>

					</div>

					<footer id="footer">
						
					</footer>

					<div id="copyright">
						<ul><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
					</div>
                
			</div> 
	    );
    }
}

export default Home;