import React, { useState, useEffect, useContext } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getListings, reportedListings } from '../../firebase/getListings.js';
import { updateListing } from '../../firebase/firestoreMethods.js';
import { useAuth } from "../../firebase/authMethods.js";
import Button from '@mui/material/Button';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'name', headerName: 'Title', width: 200 },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'owner_id', headerName: 'Owner ID', width: 250 },
  { field: 'zip_code', headerName: 'Zip Code', width: 150 },
  { field: 'description', headerName: 'Description', width: 500 },
];

const Panel = () => {
  const authenticatedUser = useAuth().user.reloadUserInfo;
  const [flaggedListings, setFlaggedListings] = useState([]);

  useEffect(() => {
    const loadFlagged = async () => {
      const flagged = await getListings();
      setFlaggedListings(flagged.filter((x) => x.status == 'active'));
    };
    loadFlagged();
  }, []);

  const rows = flaggedListings.map((lstng) => {
    return { id: lstng.listing_id, name: lstng.name, status: 'flagged', type: lstng.type, zip_code: lstng.zip_code, owner: lstng.owner_id, description: lstng.description };
    // lstng.status
  });

  const handleRelist = () => {
    flaggedListings.slice(0,10).forEach(async (lstng) => {
      await updateListing(lstng.listing_id, { status: 'active' });
      return;
    });
    return;
  };

  return (
    <div style={{ height: '85vh', width: '98%', padding: '0px 25px 0px 25px' }}>
      <h1>Welcome, Mark.</h1>
      <br></br>
      <div style={{ width: '35%', display: 'flex', justifyContent: 'space-between' }}>
        <h2>Reported Listings</h2>
        <Button
          onClick={(e) => handleRelist(e)}
          sx={{ my: 2, color: '#398378', display: 'block' }}
        >
          Reactivate Selection
        </Button>
        <Button
          onClick={(e) => window.location = '/'}
          sx={{ my: 2, color: '#398378', display: 'block' }}
        >
          Return TO HOME
        </Button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
      />
    </div>
  );
}

export default Panel;