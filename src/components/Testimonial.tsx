import '../styles/Testimonial.css';

const testimonials = [
  {
    name: 'Suman Sharma',
    paragraph: "Working with Pearlsoftech.com has been an exceptional experience. Their innovative approach to technology and outstanding customer service helped us achieve our business goals efficiently.",
    gender: 'male',
    rating: 5,
  },
  {
    name: 'Priya Gurung',
    paragraph: "The team at Pearlsoftech.com consistently exceeds expectations. They provided us with tailored solutions that perfectly fit our needs and have significantly boosted our productivity.",
    gender: 'female',
    rating: 4,
  },
  {
    name: 'Rajesh Koirala',
    paragraph: "Pearlsoftech.com delivered exceptional results on every project. Their expertise in software development is unparalleled, and their commitment to client satisfaction is remarkable.",
    gender: 'male',
    rating: 3,
  },
  {
    name: 'Nisha Thapa',
    paragraph: "Our experience with Pearlsoftech.com has been phenomenal. They are knowledgeable, professional, and consistently deliver high-quality results on time and within budget.",
    gender: 'female',
    rating: 5,
  },
  {
    name: 'Aarav Pandey',
    paragraph: "From start to finish, Pearlsoftech.com has been a trusted partner. Their dedication to providing cutting-edge solutions and excellent customer service sets them apart.",
    gender: 'male',
    rating: 4,
  },
  {
    name: 'Sanjay Rai',
    paragraph: "Working with Pearlsoftech.com was a seamless experience. Their team of experts helped us navigate complex technical challenges and provided solutions that aligned perfectly with our vision.",
    gender: 'male',
    rating: 3,
  },
  {
    name: 'Rina Joshi',
    paragraph: "Pearlsoftech.com helped us transform our business through their innovative solutions. Their team's responsiveness and professionalism were outstanding throughout the entire process.",
    gender: 'female',
    rating: 4,
  },
  {
    name: 'Bikash Shah',
    paragraph: "We are grateful for the exceptional service provided by Pearlsoftech.com. Their team went above and beyond to understand our requirements and deliver a solution that worked perfectly.",
    gender: 'male',
    rating: 5,
  },
  {
    name: 'Amina Magar',
    paragraph: "Thanks to Pearlsoftech.com, our business is more efficient than ever. They have a fantastic team that listens to client needs and consistently delivers top-notch technology solutions.",
    gender: 'female',
    rating: 4,
  },
  {
    name: 'Puspa Bhandari',
    paragraph: "Partnering with Pearlsoftech.com was one of the best decisions we've made. They offer unparalleled technical expertise, combined with an outstanding level of customer service.",
    gender: 'female',
    rating: 5,
  },
];

const getRatingStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<i key={`star-solid-${i}`} className="fa-solid fa-star"></i>);
  }
  for (let i = rating; i < 5; i++) {
    stars.push(<i key={`star-regular-${i}`} className="fa-regular fa-star"></i>);
  }
  return stars;
};

const getImageUrl = (gender: string, index: number) => {
  const genderPrefix = gender === 'male' ? 'men' : 'women';
  return `https://randomuser.me/api/portraits/${genderPrefix}/${index}.jpg`;
};

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="title">TESTI<span>MONIALS</span></div>
      <div className="card-wrapper">
        <div className="scroll">
          {testimonials.map((testimonial, index) => (
            <div className="card" key={`${testimonial.name}-${index}`}>
              <div className="left">
                <img src={getImageUrl(testimonial.gender, index)} alt={testimonial.name} />
              </div>
              <div className="right">
                <div className="name">{testimonial.name}</div>
                <div className="rating">
                  {getRatingStars(testimonial.rating)}
                </div>
                <div className="paragraph">
                  {testimonial.paragraph}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
