const UserForm = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select
          name="city"
          id="city"
          style={{
            padding: "10px",
            fontSize: "18px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            border: "0",
            borderRight: "1px solid grey",
            marginTop: "50px"
          }}
        >
          <option value="Lucknow">Lucknow</option>
          <option value="Varanasi">Varanasi</option>
          <option value="Siddharthnagar">Kalpi</option>
          <option value="Basti">Basti</option>
          <option value="Delhi">Delhi</option>
        </select>
        <input
          type="text"
          style={{
            padding: "10px",
            fontSize: "18px",
            width: "400px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            border: "0",
            marginTop: "50px"
          }}
          placeholder="🔍Search for restaurant, cuisine or a dish"
        />
      </div>
    </>
  );
};
export default UserForm;
