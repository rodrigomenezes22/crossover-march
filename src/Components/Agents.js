import AgentCard from "./AgentCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Agents() {
  const [agents, setAgents] = useState();

  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/agents/list",
    params: {
      postal_code: "11234",
      offset: "0",
      limit: "20",
      sort: "recent_activity_high",
      types: "agent",
    },
    headers: {
      // "content-type": "application/json",
      "X-RapidAPI-Key": "a010d51f12msh19bbda2704386bcp14a7eejsn2d0694e86011",
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAgents(response.data.agents);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <section className="sectionAgents">
      {agents &&
        agents.map((agent) => (
          <AgentCard {...agent} key={agent.avertiser_id} />
        ))}
    </section>
  );
}
