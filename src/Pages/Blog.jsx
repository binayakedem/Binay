import React,{ useRef } from 'react';
import { useParams } from 'react-router-dom';
import MyBlog from './MyBlog';
const Blog = () => {
    const data=[
        {
            "id":1,
          "heading": "Achievement in Machine Learning",
          "primary_image": "https://media.gettyimages.com/id/1366475366/photo/artificial-intelligence-digital-concept-abstract-brains-inside-light-bulb.jpg?s=612x612&w=gi&k=20&c=lviPXOkxp513yGzh8jUjjPNz-pK9WrXgWLPQ8Sp_x5g=",
          "author": "Binaya Limbu",
          "update_time": "Friday, June 21, 2024",
          "main_paragraph": "Machine learning is rapidly evolving, and my recent achievement in this field is a testament to the dedication and effort I have put into mastering this technology. I developed a novel algorithm that enhances the accuracy of predictive models by 15%, significantly outperforming traditional methods. This breakthrough has potential applications in various industries, from healthcare to finance, providing more reliable and precise predictions. The project involved extensive research, data analysis, and testing to ensure the robustness and reliability of the algorithm. Collaborating with a team of experts, we successfully implemented the solution in a real-world scenario, achieving remarkable results.",
          "second_paragraph": "The impact of this achievement is far-reaching. In the healthcare sector, for example, improved predictive models can lead to better patient outcomes by identifying potential health risks earlier and more accurately. In finance, more precise predictions can enhance risk management and investment strategies, leading to greater stability and profitability. The journey to this achievement was challenging, requiring a deep understanding of machine learning principles and a commitment to continuous learning. I am excited about the future possibilities this achievement opens up and look forward to exploring new avenues in machine learning.",
          "second_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfF2mwUHqxFPIxoJmVZc0xFkavFdgWcuRKi9AJXhkUnf336h4PZqato1I4n9-crWw2Rvg&usqp=CAU"
        },
        {
            "id":2,
          "heading": "Innovative Web Development Project",
          "primary_image": "https://miro.medium.com/v2/resize:fit:640/1*ENDhbGaYLxASZ7n2qM3d1g.png",
          "author": "Binaya Limbu",
          "update_time": "Friday, June 21, 2024",
          "main_paragraph": "Web development is a field that constantly demands innovation and creativity. Recently, I led a project that revolutionized the way users interact with websites. By incorporating advanced technologies such as WebAssembly and Progressive Web Apps (PWAs), we created a highly responsive and user-friendly web application that offers a seamless experience across all devices. The project aimed to address common issues like slow loading times and poor performance, which often plague traditional web applications. Through meticulous planning, design, and development, we delivered a product that not only meets but exceeds user expectations.",
          "second_paragraph": "This innovative web development project has set a new benchmark in the industry. Users have praised the application's speed, reliability, and intuitive interface, which significantly enhances their overall experience. The use of WebAssembly allowed us to execute complex computations directly in the browser, reducing server load and improving performance. PWAs ensured that the application could function offline and provide a native app-like experience on mobile devices. This project demonstrates the importance of staying updated with the latest technological advancements and continuously pushing the boundaries to deliver superior solutions.",
          "second_image": "https://www.wscubetech.com/blog/wp-content/uploads/2024/01/web-development-projects-1.webp"
        },
        {
            "id":3,
          "heading": "Successful AI Integration in Business Processes",
          "primary_image": "https://backend.vlinkinfo.com/uploads/guide_on_ai_integration_in_business_processes_thumnail_08a49d8dcb.jpg",
          "author": "Binaya Limbu",
          "update_time": "Friday, June 21, 2024",
          "main_paragraph": "Integrating artificial intelligence (AI) into business processes has become essential for companies aiming to stay competitive in today's fast-paced market. Recently, I spearheaded an AI integration project that transformed our business operations. By deploying AI-driven automation tools, we streamlined various processes, resulting in a 30% increase in efficiency and a significant reduction in operational costs. The project involved identifying key areas where AI could make the most impact, such as customer service, inventory management, and data analysis. Through close collaboration with stakeholders, we ensured a smooth transition and maximized the benefits of AI technology.",
          "second_paragraph": "The successful AI integration has had a profound impact on our business. Customer service has improved dramatically with AI-powered chatbots providing instant support and resolving issues more efficiently. Inventory management has become more accurate and less time-consuming, allowing us to maintain optimal stock levels and reduce waste. Additionally, AI-driven data analysis has provided valuable insights, enabling us to make more informed decisions and stay ahead of market trends. This project underscores the transformative potential of AI in business and highlights the importance of adopting innovative solutions to drive growth and efficiency.",
          "second_image": "https://www.customsoftwarelab.com/wp-content/uploads/2024/01/Implementing-AI-in-Business-Processes-A-Comprehensive-Guide.png"
        },
        {
            "id":4,
          "heading": "Groundbreaking Research in Quantum Computing",
          "primary_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fpgEL1BKHSje4oGVa5CGWAnJttvtXXAkFoGnvk3PQrSZ_sNfwOsE4NjmtVljH8pFavc&usqp=CAU",
          "author": "Binaya Limbu",
          "update_time": "Friday, June 21, 2024",
          "main_paragraph": "Quantum computing is poised to revolutionize the technology landscape, and my recent research in this field marks a significant milestone. I led a team of researchers in developing a new quantum algorithm that promises to solve complex problems exponentially faster than classical algorithms. This breakthrough has the potential to impact various sectors, including cryptography, materials science, and drug discovery. The research involved extensive theoretical work, simulations, and experiments to validate the algorithm's effectiveness. Our findings have been published in a leading scientific journal, garnering attention from the global scientific community.",
          "second_paragraph": "The implications of this groundbreaking research are immense. In cryptography, the new algorithm can enhance security by enabling the development of more robust encryption methods. In materials science, it can accelerate the discovery of new materials with desirable properties, leading to innovations in various industries. In drug discovery, the algorithm can significantly reduce the time and cost of identifying potential drug candidates, expediting the development of new treatments. This research highlights the transformative power of quantum computing and reinforces the importance of continued investment in this cutting-edge field. I am excited about the future possibilities and the potential impact of our work.",
          "second_image": "https://thedebrief.b-cdn.net/wp-content/uploads/2024/01/DarpaHarvard.jpg"
        },
        {
            "id":5,
          "heading": "Pioneering Work in Renewable Energy Solutions",
          "primary_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3XkSc0JXlgpgAwoJmOCa2qthvtURyWfwo7TVyNy7rLdod0qDx8fEQIFD93kEbXneFU4&usqp=CAU",
          "author": "Binaya Limbu",
          "update_time": "Friday, June 21, 2024",
          "main_paragraph": "Renewable energy is crucial for a sustainable future, and my recent work in this area aims to address some of the most pressing challenges. I led a project that developed an innovative solar energy system capable of generating 20% more power compared to existing solutions. This was achieved by integrating advanced materials and optimizing the design of solar panels to capture more sunlight and convert it into electricity more efficiently. The project also focused on making the system affordable and accessible, ensuring that more people can benefit from clean and renewable energy.",
          "second_paragraph": "The pioneering work in renewable energy solutions has received widespread recognition. The new solar energy system has been successfully tested in various locations, demonstrating its reliability and efficiency under different environmental conditions. This breakthrough has the potential to significantly reduce reliance on fossil fuels and decrease greenhouse gas emissions, contributing to a cleaner and healthier planet. Additionally, the affordability and accessibility of the system make it a viable option for communities around the world, particularly in remote and underserved areas. This project underscores the importance of innovation in tackling global challenges and highlights the role of renewable energy in building a sustainable future.",
          "second_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjZnlLflpuNrBbtqQvxbuUeahaWAwCUEnpCW7g2lw4aqM5pz6fjSFuU6Dr31FymJpJzo&usqp=CAU"
        },]
        const { id=1 } = useParams();
        const selectedItem = data.find((item) => item.id === parseInt(id));
        const leftRef = useRef(null);
  const rightRef = useRef(null);
  const handleScroll = () => {
    // Sync scroll positions
    rightRef.current.scrollTop = leftRef.current.scrollTop;
  };
  return (
    <>
    <div className='overflow-hidden h-80  w-full' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <img className='h-80 w-full object-cover' src="https://mijablur.com/wp-content/uploads/20211222_192434_0000.jpg" alt="blogginbanner" />
    </div>
    <MyBlog/>

    </>
  )
}

export default Blog