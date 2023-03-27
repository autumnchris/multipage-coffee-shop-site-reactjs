import React from 'react';
import HeroBanner from '../components/HeroBanner';
import aboutHeroBanner from '../assets/images/about-hero-banner.jpg';
import foundersOurStory from '../assets/images/founders-our-story.jpg';
import foundersOurMission from '../assets/images/founders-our-mission.jpg';

const About = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="About Us" imageFile={aboutHeroBanner} />
      <section className="main-content about">
        <h3>Our Story</h3>
        <section className="content-container">
          <figure>
            <img src={foundersOurStory} alt="photo of founders smiling at camera in the kitchen" />
          </figure>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non curabitur. Enim sed faucibus turpis in. Pellentesque nec nam aliquam sem et tortor consequat id porta. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eu non diam phasellus vestibulum lorem sed risus ultricies. Viverra adipiscing at in tellus. Diam maecenas ultricies mi eget mauris. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Interdum varius sit amet mattis. Facilisis sed odio morbi quis commodo odio aenean. Quam lacus suspendisse faucibus interdum posuere. Arcu dictum varius duis at consectetur lorem donec massa sapien.</p>
          <p>Amet consectetur adipiscing elit ut aliquam. Egestas pretium aenean pharetra magna. Pellentesque elit eget gravida cum. Nulla pellentesque dignissim enim sit amet venenatis urna. At lectus urna duis convallis convallis tellus id. Urna duis convallis convallis tellus id. Nascetur ridiculus mus mauris vitae. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Scelerisque viverra mauris in aliquam sem fringilla. Donec enim diam vulputate ut pharetra. Egestas quis ipsum suspendisse ultrices gravida. Cursus vitae congue mauris rhoncus aenean.</p>
        </section>
        <h3>Our Mission</h3>
        <section className="content-container">
          <figure>
            <img src={foundersOurMission} alt="photo of founders brewing coffee in the kitchen" />
          </figure>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tortor dignissim convallis aenean et tortor. Sapien faucibus et molestie ac feugiat sed. Vestibulum lectus mauris ultrices eros. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Facilisis volutpat est velit egestas dui id. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Amet cursus sit amet dictum sit amet justo. Ac felis donec et odio pellentesque diam volutpat. Orci phasellus egestas tellus rutrum tellus pellentesque eu.</p>
          <p>In metus vulputate eu scelerisque. Auctor augue mauris augue neque gravida in fermentum et. Sit amet nisl suscipit adipiscing. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Varius vel pharetra vel turpis nunc. Integer vitae justo eget magna fermentum iaculis. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Ac tortor dignissim convallis aenean et tortor. Ac turpis egestas integer eget aliquet nibh praesent. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Nisl nisi scelerisque eu ultrices vitae auctor. Magna etiam tempor orci eu lobortis. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. At consectetur lorem donec massa sapien faucibus et molestie. Massa sapien faucibus et molestie.</p>
        </section>
      </section>
    </React.Fragment>
  );
}

export default About;