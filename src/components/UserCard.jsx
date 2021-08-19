import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react';

const UserCard = ({
  avatar, 
  userName, 
  repos, 
  followers, 
  following, 
  }) => {
  return (
    <div className="card">
      <Card>
        <Image 
          src={avatar} 
          wrapped ui={false} 
        />
        <Card.Content>
          <Card.Header>{userName}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {followers} Followers
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {following} Following
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {repos} Repos
          </a>
        </Card.Content>
      </Card>
    </div>
  )
};

export default UserCard;
