import React, { Fragment } from 'react';
import TileRow from './TileRow';
import Tile from './Tile';
import ScoreBoard from './ScoreBoard';

import gamemap from '../../Data/america.json';
//import gamemap from '../../Data/gamemap.json';

export default ({ name }) => 
<Fragment>
  <div><strong>{gamemap.name}</strong> by {gamemap.author}</div>
  <div>{gamemap.description}</div>
  <div className="honeycomb" style={{ whiteSpace: 'nowrap' }}>
    {
      gamemap.tiles.map(function (row, ri) {
        return <TileRow key={ri}>
          {
            row.map(function (tile, ti) {
              return <Tile key={ti} tileType={tile} />
            })
          }
        </TileRow>
      })
    }
  </div>
</Fragment>