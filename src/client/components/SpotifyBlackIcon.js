import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let SpotifyBlackIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M1869 1048c-375,-223 -993,-243 -1351,-135 -57,17 -118,-15 -136,-72 -17,-58 15,-118 73,-136 411,-125 1094,-101 1525,156 52,31 69,97 38,149 -31,52 -97,69 -149,38zm-12 330c-26,43 -82,56 -125,30 -313,-192 -789,-248 -1159,-136 -48,14 -99,-13 -113,-60 -14,-48 13,-99 60,-113 422,-128 948,-66 1307,155 43,26 56,82 30,125zm-142 317c-21,34 -66,45 -100,24 -273,-167 -617,-205 -1022,-112 -39,9 -78,-16 -87,-55 -9,-39 15,-78 55,-87 443,-101 823,-58 1130,130 34,21 45,66 24,100zm-533 -1678c-642,0 -1163,521 -1163,1163 0,642 521,1163 1163,1163 642,0 1163,-521 1163,-1163 0,-642 -521,-1163 -1163,-1163z"/>
  </SvgIcon>
);
SpotifyBlackIcon = pure(SpotifyBlackIcon);
SpotifyBlackIcon.displayName = 'SpotifyBlackIcon';
SpotifyBlackIcon.muiName = 'SpotifyBlackIcon';

export default SpotifyBlackIcon;