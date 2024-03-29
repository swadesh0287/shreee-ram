import OmImage from "../../public/images/OmSymbol.svg";
import { motion } from "framer-motion";

const GalleryDataCollection = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CKd-i5KW-Okgu0Pr5D0poy5QW8SQAwBDN6FTmh4n4hngpL94LRnmWMvvltcUo1QWjUg&usqp=CAU",
    title: "राम लला दर्शन",
  },
  {
    imageUrl:
      "https://images.livemint.com/img/2020/08/05/1600x900/PTI05-08-2020_000070B_1596616220560_1596616237975.jpg",
    title: "दर्शन करते हुए मोदी जी",
  },
  {
    imageUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/lod-ram-pti.jpeg?size=1200:675",
    title: "भूमि पूजन से पहले पूजा",
  },
  {
    imageUrl:
      "https://w0.peakpx.com/wallpaper/266/490/HD-wallpaper-narendra-modiji-ram-mandir-ramji-yogiji.jpg",
    title: "योगी जी द्वारा स्मृति चिन्ह",
  },
  {
    imageUrl:
      "https://www.shutterstock.com/image-photo/ayodhya-during-deepotsava-diwali-event-600nw-2338789429.jpg",
    title: "दीपदान का नजारा",
  },
  {
    imageUrl:
      "https://i0.wp.com/tech.hindilish.com/wp-content/uploads/2023/12/Ayodhya-Ram-mandir-construction-Images-HD.jpeg",
    title: "राम भक्त",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDhGFjadjvmN7pgSYztDwXZgEcNCNn4V82fe7_QQr-0n5CNlikcsxnAmFwN10A8oW8R4&usqp=CAU",
    title: "जगमगता अयोध्या",
  },
  {
    imageUrl:
      "https://feeds.abplive.com/onecms/images/uploaded-images/2021/06/11/661142481f21a4fbb60c95bfaa021bcd_original.jpg",
    title: "लाल पत्थर निर्मित अयोध्या",
  },
  {
    imageUrl:
      "data:image/jpeg;base64,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",
    title: "राम मूर्ति की पहली झलक",
  },
];

const Gallery = () => (
  <>
    <section className="bg-orange-500 py-20 md:px-16 relative">
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
        <img src={OmImage} className="h-[90%] z-[1] opacity-30" />
      </div>
      <h1 className="font-bold text-5xl mb-10 text-white text-center z-[5]">
        Captured Moments
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16">
        {GalleryDataCollection.map((gallery) => {
          const { imageUrl, title } = gallery;
          return (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="z-[3] w-80 h-64 shadow-lg bg-white m-3 p-3 hover:scale-125 transition duration-500 mx-auto"
            >
              <img
                className="rounded h-48 w-80 object-cover object-center"
                src={imageUrl}
              />
              <h1 className="mt-3 font-bold text-center text-2xl">{title}</h1>
            </motion.div>
          );
        })}
      </div>
    </section>
  </>
);

export default Gallery;
