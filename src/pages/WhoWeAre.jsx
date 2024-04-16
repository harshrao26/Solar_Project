import React from 'react';

const WhoweAre = () => {
  return (
    <section className="about-section py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="content-column lg:w-1/2 md:w-full sm:w-full order-2 lg:order-1 mb-8 lg:mb-0">
            <div className="inner-column px-4">
              <div className="sec-title mb-6">
                <span className="title text-blue-500">About</span>
                <h2 className="text-4xl font-semibold">We are Creative Tech Enthusiasts working since 2015</h2>
              </div>
              <div className="text mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolores commodi, corporis doloremque omnis officia totam ipsa ea autem perferendis?
              </div>
              <div className="text mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui nihil repudiandae repellat error beatae, incidunt voluptatem laboriosam explicabo doloribus praesentium, hic dolore? Voluptas corrupti cum officiis ipsam iure, dicta tempora, molestias illo animi quibusdam quos, quidem ab minima perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui nihil repudiandae repellat error beatae, incidunt voluptatem laboriosam explicabo doloribus praesentium, hic dolore? Voluptas corrupti cum officiis ipsam iure, dicta tempora, molestias illo animi quibusdam quos, quidem ab minima perspiciatis.
              </div>
              <div className="btn-box">
                <a href="#" className="btn-style-one">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="image-column lg:w-1/2 md:w-full sm:w-full order-1 lg:order-2">
            <div className="inner-column px-4">
              
              <figure className="image-1">
                <a href="#" className="lightbox-image">
                  <img title="" src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="rounded-2xl shadow-xl" />
                </a>
              </figure>
            </div>
          </div>

          <div className="w-full text-center mb-12">
            <div className="sec-title mb-6">
              <span className="title text-blue-500">Our Future Goal</span>
              <h2 className="text-4xl font-semibold">We want to lead in innovation & Technology</h2>
            </div>
            <div className="text mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi magni rerum fugit quidem, eos repudiandae? Facere, pariatur.
            </div>
            <div className="text mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ducimus expedita molestiae architecto sequi incidunt praesentium vel illum voluptas quae, qui quas modi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, molestias.
            </div>
            <div className="text mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam vitae iure laudantium doloremque, cum voluptates repellendus beatae. Recusandae, fugiat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam vitae iure laudantium doloremque, cum voluptates repellendus beatae. Recusandae, fugiat.
            </div>
            <div className="text mb-6">
              Here you can also share the content you create, if our technical team likes it, then we will also share it on our blog.
            </div>
            <div className="text mb-6">
              In the end, I would say keep visiting our website.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoweAre;
