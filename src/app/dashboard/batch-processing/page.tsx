'use client';

import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    IconButton,
    Typography,
    Chip,
    LinearProgress,
    TextField,
    Box,
    TablePagination,
    Button,
} from '@mui/material';

import AudioWaveContainer from '@/app/components/AudioWaveContainer';

const mockData = [
    {
        fileName: 'Ses_Kayit_001.wav',
        date: '2024-04-27',
        source: 'VoxID',
        customerNo: '100001',
        identityNo: '98*******01',
        agentNo: 'AG001',
        frequency: 450,
        status: 'Yüklendi',
    },
    {
        fileName: 'Ses_Kayit_002.wav',
        date: '2024-04-26',
        source: 'VoxID',
        customerNo: '100002',
        identityNo: '98*******02',
        agentNo: 'AG002',
        frequency: 460,
        status: 'İşleniyor',
    },
    {
        fileName: 'Ses_Kayit_003.wav',
        date: '2024-04-25',
        source: 'VoxID',
        customerNo: '100003',
        identityNo: '98*******03',
        agentNo: 'AG003',
        frequency: 470,
        status: 'Hata',
    },
    {
        fileName: 'Ses_Kayit_004.wav',
        date: '2024-03-11',
        source: 'VoxID',
        customerNo: '100004',
        identityNo: '98*******04',
        agentNo: 'AG004',
        frequency: 480,
        status: 'Yüklendi',
    }, ,
    {
        fileName: 'Ses_Kayit_003.wav',
        date: '2024-06-07',
        source: 'VoxID',
        customerNo: '100005',
        identityNo: '98*******05',
        agentNo: 'AG005',
        frequency: 490,
        status: 'İşleniyor',
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Yüklendi':
            return 'success';
        case 'İşleniyor':
            return 'warning';
        case 'Hata':
            return 'error';
        default:
            return 'default';
    }
};

export default function BatchProcessing() {
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            // Yükleme işlemleri burada yapılabilir
        }
    };

    const filteredData = mockData.filter(row =>
        row?.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Paper sx={{ padding: 2, background: '#212529', borderRadius: '12px' }}>
            <div className="card-header">Ses Kayıtları</div>

            {/* Görsel Dosya Yükleme Kutusu */}
            <Box
                sx={{
                    border: '2px dashed #aaa',
                    borderRadius: 2,
                    padding: 4,
                    textAlign: 'center',
                    cursor: 'default',
                    backgroundColor: '#f9f9f9',
                    mb: 3,
                }}
            >
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Dosyaları bırakın veya yüklemek için tıklayın
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    (Maks. 100.000 ses dosyası yüklenebilir)
                </Typography>
            </Box>

            <Box display="flex" gap={2} flexWrap="wrap" justifyContent="flex-end" mb={3}>
                <Button variant="contained" color="error">
                    <span style={{ marginRight: '4px' }} className="material-symbols-outlined">
                        delete_forever
                    </span>
                    Tüm Dosyaları SİL
                </Button>
                <Button variant="contained" color="primary">
                    <span style={{ marginRight: '4px' }} className="material-symbols-outlined">
                        graphic_eq
                    </span>
                    Ses İmzası Çıkarma
                </Button>
                <Button variant="contained" color="success">
                    <span style={{ marginRight: '4px' }} className="material-symbols-outlined">
                        save
                    </span>
                    İmzaları Kaydet
                </Button>
                <Button variant="contained" color="secondary">
                    <span style={{ marginRight: '4px' }} className="material-symbols-outlined">
                        add_circle
                    </span>
                    YENİ İşlem
                </Button>
            </Box>
            <TableContainer>
                <Table size="small" className='custom-table'>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox"><Checkbox /></TableCell>
                            <TableCell>Dosya Adı</TableCell>
                            <TableCell>Tarih</TableCell>
                            <TableCell>Kaynak Sistem</TableCell>
                            <TableCell>Müşteri No</TableCell>
                            <TableCell>Kimlik No</TableCell>
                            <TableCell>Agent No</TableCell>
                            <TableCell>Ses Frekansı</TableCell>
                            <TableCell>Ses Dalga Formu</TableCell>
                            <TableCell>Durum</TableCell>
                            <TableCell>İşlem</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell padding="checkbox"><Checkbox /></TableCell>
                                <TableCell>{row?.fileName}</TableCell>
                                <TableCell>{row?.date}</TableCell>
                                <TableCell>{row?.source}</TableCell>
                                <TableCell>{row?.customerNo}</TableCell>
                                <TableCell>{row?.identityNo}</TableCell>
                                <TableCell>{row?.agentNo}</TableCell>
                                <TableCell>
                                    <Typography variant="body2">{row?.frequency} Hz</Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={(((row ? row.frequency : 500) - 400) / 100) * 100}
                                        sx={{ height: 6, borderRadius: 5, mt: 0.5, backgroundColor: '#eee' }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <AudioWaveContainer />
                                </TableCell>
                                <TableCell>
                                    <Chip label={row?.status} color={getStatusColor(row ? row.status : '')} size="small" />
                                </TableCell>
                                <TableCell>
                                    <IconButton color="error">
                                        <span className="material-symbols-outlined">delete</span>
                                    </IconButton>
                                    <IconButton color="primary">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                sx={{ color: '#ced4da' }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
