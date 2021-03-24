import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="header">
        <span>
          For The Love Of{" "}
          <strong>
            <u> Food </u>
          </strong>
        </span>
      </div>
      <div className="intro">
        <img
          src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg"
          className="image"
          alt=""
        />
        <div className="content">
          <p>
            Welcome to Indian Cuisine exploration journey.The cuisines in India
            are as diverse as its multi-ethnic culture. The exotic and the
            delicious dishes of India are marked by the subtle uses of spices
            and herbs. Every region has their own claim to fame dishes and
            different styles of cooking. The method of cooking, the flavor and
            their specialties change with the landscapes. This app will
            recommend the most popular Indian Dishes and although there are
            numerous cuisines based on region , we will be covering some of the
            famous cuisines in India.
          </p>
          <h2>Let's start our journey !</h2>
        </div>
      </div>
    </div>
  );
}
