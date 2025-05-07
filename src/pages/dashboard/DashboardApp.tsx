import React, { useEffect, useState } from 'react'
import { apiProducts } from "../../shared/lib/apiProducts";
import type { Observable } from 'rxjs/internal/Observable';
import type { Product } from '../../shared/lib/models';
import DataTable, { createTheme } from 'react-data-table-component';
import styled from 'styled-components';
import Button from '../../shared/Button';
const customStyles = {
    rows: {
        style: {
            minHeight: '65px', // override the row height
        },
    },
    headCells: {
        style: {
            fontSize: '1.2rem',
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
           "text-transform": 'Capitalize',
            fontWeight: 'bold',
            backgroundColor: '#bebebe',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            fontSize: '1.2rem',
        },
    },
};
createTheme('solarized', {
    text: {
        primary: '#141414',
        secondary: '#2aa198',
        fontSzie: '2.9rem',
    },
    background: {
        default: '#e7e7e7cc',
    },
    context: {
        background: '#e7e7e7cc',
        text: '#FFFFFF',
    },
    divider: {
        default: '#073642',
    },
    action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
    },
}, 'light');
const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled(Button)`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Filter By Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <ClearButton primary type="button" onClick={onClear}>
            X
        </ClearButton>
    </>
);
export default function DashboardApp() {
    const conditionalRowStyles = [
        {
            when: row => row.price < 20,
            style: {
                backgroundColor: 'green',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        // You can also pass a callback to style for additional customization
        {
            when: row => row.calories < 400,
            style: row => ({ backgroundColor: row.isSpecial ? 'pink' : 'inerit' }),
        },
    ];
    const columns = [
        {
            name: 'id',
            selector: row => row.id, sortable: true,
        },
        {
            name: 'title',
            selector: row => row.title, sortable: true,
        },  
        {
            name: 'category',
            selector: row => row.category, sortable: true,
        },
        {
            name: 'price',
            selector: row => row.price, sortable: true,
        }
    ];
    const [selectedRows, setSelectedRows] = React.useState(false);
    const [toggledClearRows, setToggleClearRows] = React.useState(false);
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false)
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
 
    useEffect(() => {
        const loadData = async () => {
            try {
                const _products = await apiProducts.getProducts();
                setProducts(_products.slice(0, 15)) 
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load data')
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])
    const handleClick = (r: Product) => {
      // clickedData(r);
    };
    const filteredItems = products.filter(
        item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
    );
    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
        }
    };
    const handleSelectedRowsChange = ({ selectedRows }) => {
        console.log('selectedRows', selectedRows);
        setSelectedRows(selectedRows);
    };
    const handleClearRows = () => {
        setToggleClearRows(!toggledClearRows);
    }
    const subHeaderComponentMemo = React.useMemo(() => {
        console.log('filterText', filterText);
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };
       
        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);


    if (loading) {
        return <div className="loader">Loading...</div>
    }
    if (error) {
        return <div className="error">{error}</div>
    }
   
    return (
        <main>
            <h2>Dashboard</h2>  
            <div className="dashboard-container">
               
                <Button primary onClick={handleClearRows}>
                    Clear Selected Rows
                </Button>
                <DataTable className="mainTable"
                    columns={columns}
                    data={filteredItems}
                    selectableRows
                    pagination
                    responsive
                    persistTableHead 
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    onRowClicked={handleClick}
                    theme="solarized"
                    selectableRowsHighlight={true}
                    customStyles={customStyles}
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    conditionalRowStyles={conditionalRowStyles}
                    onSelectedRowsChange={handleSelectedRowsChange}
                    clearSelectedRows={toggledClearRows}
                />
                
            </div>
        </main>
    )
}