import React from "react";
import { connect } from "react-redux";

const Players = ({ players }) => (
  <section>
    <h2>Jugadores</h2>
    <div className="container-players">
      {players.map((j) => (
        <article className="jugador">
          <img src={j.photo} alt={j.name}/>
          <h3>{j.name}</h3>
          <div>
            <button>Titular</button>
            <button>Suplente</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const mapStateToProps = (state) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Players);
