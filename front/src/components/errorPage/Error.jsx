const Error = () => {
  return (
    <>
      <div style={{ textAlign: "center", color:"#222222", backgroundColor:"#f5f5f5", gap:"3em", display:"flex", height:"50vw", flexDirection:"column", justifyContent:"Center", alignItems:"center"}}>
        <h1>404 - Página No Encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <a href="/" style={{backgroundColor:"#222222", padding:"1em", width:"15em", }}>Volver a la página principal</a>
      </div>
    </>
  );
};
export default Error;
