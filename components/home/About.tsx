import Image from "next/image";

const About = () => {
  return (
    <section className="center component">
      <h2 className="text-xl md:text-2xl">O nas</h2>
      <div className="center article container mx-auto flex w-auto flex-col md:flex-row">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum vero
          aperiam repudiandae consequatur dolorem ipsum laboriosam, est atque
          totam placeat doloribus veniam, voluptatibus pariatur harum quod id
          officiis provident! Qui perferendis earum fugiat at, ipsum cupiditate,
          labore quibusdam, et cumque non est asperiores! Odit consectetur
          labore praesentium. Fugit, ullam doloribus officiis velit blanditiis
          soluta animi officia amet asperiores similique quae mollitia neque
          enim veritatis aut est molestias optio sint? Voluptatem quis quam,
          vero expedita placeat, consequatur fuga eum necessitatibus doloremque
          laborum atque? Voluptates delectus, ipsa dignissimos molestiae commodi
          eius at fugit reiciendis, consequuntur soluta harum quo natus
          inventore, odio iure!
        </p>
        <Image
          src={"/images/programming.jpg"}
          alt="programowanie"
          width={400}
          height={400}
          className="m-4 drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
