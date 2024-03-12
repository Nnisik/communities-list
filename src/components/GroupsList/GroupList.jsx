import { useState } from "react";
import Data from "../../data/groups.json";
import Community from "../Community/Community";
import "./style/style.css";

export default function GroupList() {
  const communities = React.useState(Data);

  return (
    <div className="communities-list">
      {Data.map((community) => {
        let friendFollow = community.hasOwnProperty("friends");
        if (friendFollow) {
          return (
            <Community
              key={community.id}
              name={community.name}
              closed={community.closed}
              color={community.avatar_color}
              members={community.members_count}
              friends={community.friends}
            />
          );
        } else {
          <Community
            key={community.id}
            name={community.name}
            closed={community.closed}
            color={community.avatar_color}
            members={community.members_count}
          />;
        }
      })}
    </div>
  );
}
