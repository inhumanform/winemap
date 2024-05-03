function Regions() {
  // const [grapes, setGrapes] = useState([]);
  // const [filteredGrapes, setFilteredGrapes] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   fetch('/grapes')
  //     .then(response => response.json())
  //     .then(data => {
  //       setGrapes(data);
  //       setFilteredGrapes(data); 
  //     })
  //     .catch(error => {
  //       console.error('Error fetching grapes:', error);
  //     });
  // }, []);

  // const handleSearch = () => {
  //   const query = searchQuery.trim().toLowerCase();
  //   if (query === '') {
  //     setFilteredGrapes(grapes); 
  //   } else {
  //     const filtered = grapes.filter(grape =>
  //       grape.name.toLowerCase().includes(query) ||
  //       grape.color.toLowerCase().includes(query) ||
  //       grape.subregions.toLowerCase().includes(query)
  //     );
  //     setFilteredGrapes(filtered);
  //   }
  // };

  // const handleChange = event => {
  //   setSearchQuery(event.target.value);
  // };
    return (
        <div className="regions-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <p>Region Container</p>
          <li className="region-picture">
            <img src={'https://bordeauxwinevacations.com/wp-content/uploads/2023/10/BWV-Regions-Medoc.jpg'} alt={name} />
        <h4>{name}</h4>
        </li>
        </div>
      );
  }
  export default Regions;