import "./App.css";
import { useState } from "react";

function App() {
 
  const  data = [
    {
      i: "45364",
      title: "the invention of the Telephone",
      year: "1990",
      rating: "21404",
      image: "https://via.placeholder.com/150",
      category: "inventions",
    },
    {
      i: "63475",
      title: "World War II\n",
      year: "1996",
      rating: "29066",
      image: "https://via.placeholder.com/150",
      category: "wars",
    },
    {
      i: "2825",
      title: "Microscopic Organisms first discovered",
      year: "1992",
      rating: "7114",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "30298",
      title: "electricity discovered ",
      year: "1992",
      rating: "27381",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "43564",
      title: "the invention of the Telephone",
      year: "1992",
      rating: "21404",
      image: "https://via.placeholder.com/150",
      category: "inventions",
    },
    {
      i: "63475",
      title: "World War II\n",
      year: "1992",
      rating: "29066",
      image: "https://via.placeholder.com/150",
      category: "wars",
    },
    {
      i: "28255",
      title: "Microscopic Organisms first discovered",
      year: "1993",
      rating: "7114",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "13098",
      title: "electricity discovered ",
      year: "1993",
      rating: "27381",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "45643",
      title: "the invention of the Telephone",
      year: "1997",
      rating: "21404",
      image: "https://via.placeholder.com/150",
      category: "inventions",
    },
    {
      i: "63275",
      title: "World War II\n",
      year: "1998",
      rating: "29066",
      image: "https://via.placeholder.com/150",
      category: "wars",
    },
    {
      i: "21825",
      title: "Microscopic Organisms first discovered",
      year: "1998",
      rating: "7114",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "309834",
      title: "electricity discovered ",
      year: "1998",
      rating: "27381",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "445364",
      title: "the invention of the Telephone",
      year: "1998",
      rating: "21404",
      image: "https://via.placeholder.com/150",
      category: "inventions",
    },
    {
      i: "635725",
      title: "World War II\n",
      year: "1993",
      rating: "29066",
      image: "https://via.placeholder.com/150",
      category: "wars",
    },
    {
      i: "428256",
      title: "Microscopic Organisms first discovered",
      year: "1993",
      rating: "7114",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "309187",
      title: "electricity discovered ",
      year: "1998",
      rating: "27381",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "453764",
      title: "the invention of the Telephone",
      year: "1990",
      rating: "21404",
      image: "https://via.placeholder.com/150",
      category: "inventions",
    },
    {
      i: "634975",
      title: "World War II\n",
      year: "1996",
      rating: "29066",
      image: "https://via.placeholder.com/150",
      category: "wars",
    },
    {
      i: "28025",
      title: "Microscopic Organisms first discovered",
      year: "1992",
      rating: "7114",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "308298",
      title: "electricity discovered ",
      year: "1992",
      rating: "27381",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "435664",
      title: "the invention of the Telephone",
      year: "1992",
      rating: "21404",
      image: "https://via.placeholder.com/150",
      category: "inventions",
    },
    {
      i: "653475",
      title: "World War II\n",
      year: "1992",
      rating: "29066",
      image: "https://via.placeholder.com/150",
      category: "wars",
    },
    {
      i: "282535",
      title: "Microscopic Organisms first discovered",
      year: "1993",
      rating: "7114",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "131098",
      title: "electricity discovered ",
      year: "1993",
      rating: "27381",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "435643",
      title: "the invention of the Telephone",
      year: "1997",
      rating: "21404",
      image: "https://via.placeholder.com/150",
      category: "inventions",
    },
    {
      i: "634275",
      title: "World War II\n",
      year: "1998",
      rating: "29066",
      image: "https://via.placeholder.com/150",
      category: "wars",
    },
    {
      i: "215825",
      title: "Microscopic Organisms first discovered",
      year: "1998",
      rating: "7114",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "3096834",
      title: "electricity discovered ",
      year: "1998",
      rating: "27381",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "445674",
      title: "the invention of the Telephone",
      year: "1998",
      rating: "21404",
      image: "https://via.placeholder.com/150",
      category: "inventions",
    },
    {
      i: "635875",
      title: "World War II\n",
      year: "1993",
      rating: "29066",
      image: "https://via.placeholder.com/150",
      category: "wars",
    },
    {
      i: "282596",
      title: "Microscopic Organisms first discovered",
      year: "1993",
      rating: "7114",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "309870",
      title: "electricity discovered ",
      year: "1998",
      rating: "27381",
      image: "https://via.placeholder.com/150",
      category: "discoveries",
    },
    {
      i: "99999",
      title: "Moon Landing",
      year: "1990",
      rating: "50000",
      image: "moon-landing.jpg",
      category: "discoveries",
    },
    {
      i: "88888",
      title: "Einstein's Theory of Relativity",
      year: "1996",
      rating: "35000",
      image: "einstein.jpg",
      category: "discoveries",
    },
    {
      i: "77777",
      title: "The Printing Press",
      year: "1997",
      rating: "25000",
      image: "printing-press.jpg",
      category: "inventions",
    },
  ];
  
  const years = Array.from(new Set(data.map((item) => item.year)));

  const [hoveredDot, setHoveredDot] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleDotHover = (key) => {
    setHoveredDot(key);
  };
  
  const handleDotLeave = () => {
    setHoveredDot(null);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  
  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ flex: 1 }} />
      {years.map((year) => (
        <div key={year} style={{ marginLeft: "20px" }}>
          <h2 style={{ fontSize: "16px", margin: 0 }}>{year}</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data
              .filter((item) => item.year === year)
              .map((item, index) => (
                <div
                  key={item.name}
                  style={{
                    height: "10px",
                    width: "10px",
                    background: "black",
                    margin: "5px",
                    cursor: "pointer",
                    position: "relative"
                  }}
                  onMouseEnter={() => handleDotHover(`${year}-${index}`)}
                  onMouseLeave={handleDotLeave}
                >
                  {hoveredDot === `${year}-${index}` && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        zIndex: 1
                      }}
                    >
                      <div
                        style={{
                          height: showMore ? "250px" : "150px",
                          width: showMore ? "800px" : "500px",
                          backgroundColor: "white",
                          boxShadow: "0px 0px 5px black",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        {showMore ? (
                          <>
                            <div style={{ flex: 1 }}>
                              <img
                                src={item.image}
                                alt={item.name}
                                style={{ height: "200px", width: "200px", borderRadius: "50%" }}
                              />
                            </div>
                            <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingLeft: "20px" }}>
                              <h3 style={{ margin: "0" }}>{item.name}</h3>
                              <p style={{ margin: "0", paddingTop: "5px" }}>{item.year}</p>
                              <p style={{ margin: "0", paddingTop: "5px" }}>{item.rating}/10</p>
                              <p style={{ margin: "0", paddingTop: "5px" }}>{item.category}</p>
                            </div>
                            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                              <button onClick={() => setShowMore(false)}>x</button>
                            </div>
                          </>
                        ) : (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                          />
                        )}
                      </div>
                      {!showMore && (
                        <div style={{ paddingTop: "10px" }}>
                          <button onClick={() => setShowMore(true)}>Show more about it</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
      <div style={{ flex: 1 }} />
    </div>
  );

  
  
  
}

export default App;
