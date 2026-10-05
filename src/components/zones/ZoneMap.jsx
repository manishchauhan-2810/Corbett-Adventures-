import React from 'react';
import ZoneMarker from './ZoneMarker';

const ZoneMap = ({
  zones = [],
  selectedZone,
  onZoneSelect,
  isMobile = false,
}) => {
  return (
    <div className="relative">
      <img
        src="/Jim Corbett Terrain Map.png"
        alt="Jim Corbett terrain map"
        className="w-full"
      />

      {zones.map((zone) => (
        <ZoneMarker
          key={zone.id}
          zone={zone}
          isSelected={selectedZone?.id === zone.id}
          onClick={onZoneSelect}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default ZoneMap;