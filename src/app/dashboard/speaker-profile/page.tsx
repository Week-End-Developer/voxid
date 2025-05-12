'use client';

import Image from "next/image";
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
    Box,
    TablePagination,
    TextField,
    InputAdornment,
} from '@mui/material';
import AudioWaveContainer from '@/app/components/AudioWaveContainer';
import { useState } from 'react';

const conversationData = [
    {
        fileName: 'Ses_Kayit_001.wav',
        date: '2024-04-27',
        source: 'VoxID',
        customerNo: '100001',
        agentNo: 'AG001',
        frequency: '450 Hz',
        emotion: 'Mutlu'
    },
    {
        fileName: 'Ses_Kayit_002.wav',
        date: '2024-04-26',
        source: 'VoxID',
        customerNo: '100002',
        agentNo: 'AG002',
        frequency: '460 Hz',
        emotion: 'Nötr'
    },
    {
        fileName: 'Ses_Kayit_003.wav',
        date: '2024-04-25',
        source: 'VoxID',
        customerNo: '100003',
        agentNo: 'AG003',
        frequency: '470 Hz',
        emotion: 'Üzgün'
    }
];

// app/dashboard/page.tsx
export default function SpeakerProfile() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setPage(0);
    };

    const filteredData = conversationData.filter(row =>
        Object.values(row).some(value =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const data = [
        {
            icon: 'tag',
            label: 'Müşteri No:',
            value: '100123'
        },
        {
            icon: 'credit_card',
            label: 'Kimlik No:',
            value: '98******01'
        },
        {
            icon: 'account_circle',
            label: 'Ad Soyad:',
            value: 'Test User'
        },
        {
            icon: 'calendar_month',
            label: 'İlk İzma Alınma Tarihi:',
            value: '2024-04-27'
        },
        {
            icon: 'verified_user',
            label: 'Durumu:',
            value: 'Aktif'
        },
        {
            icon: 'sentiment_satisfied',
            label: 'Genel Duygu Durumu:',
            value: 'Mutlu'
        },
        {
            icon: 'person',
            label: 'Cinsiyet:',
            value: 'Erkek'
        },
        {
            icon: 'timer',
            label: 'Müşteri olma Süresi:',
            value: '1 Yıl 2 Ay 5 Gün'
        },
        {
            icon: 'graphic_eq',
            label: 'Ses Frekansı:',
            value: '450 Hz'
        },
    ]
    return (<>

        <div style={{ color: 'var(--color-light)', display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
            <div className="styled-card-1" style={{ flex: '1', minWidth: '500px', maxWidth: '800px', borderRadius: '16px' }}>
                <div className="card-header">Kullanıcı</div>
                <div style={{ display: 'flex', gap: '24px' }}>
                    {/* Left side - Profile Image and Stats */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', minWidth: '200px' }}>
                        <Image
                            style={{ borderRadius: '50%' }}
                            src="/customer.jpg"
                            alt="user"
                            width={120}
                            height={120}
                            priority
                        />
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontWeight: '400', marginBottom: '4px', color: 'var(--color-light)' }}>Test User</div>
                            <div style={{ fontWeight: '200', fontSize: '12px', opacity: '0.8', color: 'var(--color-neutral)' }}>AKB Müşteri</div>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '8px'
                        }}>
                            <div style={{
                                border: '1px solid rgba(205, 187, 185, 0.2)',
                                borderRadius: '12px',
                                padding: '8px 16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '72px',
                                background: 'rgba(0, 52, 71, 0.95)'
                            }}>
                                <span style={{ fontSize: '16px', marginBottom: '4px', color: 'var(--color-coral)' }}>18</span>
                                <span style={{ fontSize: '12px', color: 'var(--color-light)' }}>Toplam</span>
                            </div>
                            <div style={{
                                border: '1px solid rgba(205, 187, 185, 0.2)',
                                borderRadius: '12px',
                                padding: '8px 16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                background: 'rgba(0, 52, 71, 0.95)',
                                width: '72px'
                            }}>
                                <span style={{ fontSize: '16px', marginBottom: '4px', color: 'var(--color-coral)' }}>3</span>
                                <span style={{ fontSize: '12px', color: 'var(--color-light)' }}>Son</span>
                            </div>
                        </div>
                    </div>

                    {/* Right side - User Info Grid */}
                    <div style={{
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '8px',
                        alignContent: 'start'
                    }}>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="customer-info-row hover-effect"
                                style={{
                                    margin: 0,
                                    transition: 'background-color 0.2s ease',
                                    cursor: 'pointer',
                                    padding: '8px',
                                    borderRadius: '8px'
                                }}
                            >
                                <div className="align-center" style={{ gap: '6px' }}>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>
                                        {item.icon}
                                    </span>
                                    <div>
                                        <div style={{ fontSize: '16px', opacity: 0.8, marginBottom: '2px' }}>{item.label}</div>
                                        <div style={{ color: 'var(--color-teal)' }}>{item.value}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="styled-card-1" style={{ flex: '4', borderRadius: '16px' }}>
                <div className="card-header">Tüm Görüşme Listesi</div>

                <Box sx={{ width: '100%' }}>
                    <Box sx={{ mb: 3 }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Kayıt Ara..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'var(--color-light)',
                                    borderRadius: '16px',
                                    '& fieldset': {
                                        borderColor: 'var(--glass-border)',
                                        borderRadius: '16px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'var(--color-coral)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'var(--color-coral)',
                                    },
                                    backgroundColor: 'var(--glass-background)',
                                    backdropFilter: 'blur(12px)',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'var(--color-light)',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <span className="material-symbols-outlined" style={{ color: 'var(--color-light)' }}>
                                            search
                                        </span>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <TableContainer component={Paper} sx={{
                        background: 'var(--glass-background)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        '& .MuiTableCell-root': {
                            color: 'var(--color-light)',
                            borderColor: 'var(--glass-border)'
                        },
                        '& .MuiTableHead-root': {
                            background: 'var(--color-navy)',
                            '& .MuiTableCell-root': {
                                color: 'var(--color-light)',
                                fontWeight: 600
                            }
                        }
                    }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox"><Checkbox /></TableCell>
                                    <TableCell>Dosya Adı</TableCell>
                                    <TableCell>Görüşme Tarihi</TableCell>
                                    <TableCell>Kaynak Sistem</TableCell>
                                    <TableCell>Müşteri No</TableCell>
                                    <TableCell>Agent No</TableCell>
                                    <TableCell>Ses Frekansı</TableCell>
                                    <TableCell>Ses Dalga Formu</TableCell>
                                    <TableCell>Görüşme Duygu</TableCell>
                                    <TableCell>İşlem</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell padding="checkbox"><Checkbox /></TableCell>
                                            <TableCell>{row.fileName}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.source}</TableCell>
                                            <TableCell>{row.customerNo}</TableCell>
                                            <TableCell>{row.agentNo}</TableCell>
                                            <TableCell>{row.frequency}</TableCell>
                                            <TableCell>
                                                <AudioWaveContainer />
                                            </TableCell>
                                            <TableCell>
                                                <span style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px',
                                                    color: row.emotion === 'Mutlu' ? 'var(--color-coral)' :
                                                        row.emotion === 'Üzgün' ? '#E34B26' : 'var(--color-neutral)'
                                                }}>
                                                    <span className="material-symbols-outlined">
                                                        {row.emotion === 'Mutlu' ? 'sentiment_satisfied' :
                                                            row.emotion === 'Üzgün' ? 'sentiment_dissatisfied' :
                                                                'sentiment_neutral'}
                                                    </span>
                                                    {row.emotion}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton sx={{ color: 'var(--color-coral)' }}>
                                                    <span className="material-symbols-outlined">delete</span>
                                                </IconButton>
                                                <IconButton sx={{ color: 'var(--color-teal)' }}>
                                                    <span className="material-symbols-outlined">visibility</span>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        sx={{
                            color: 'var(--color-light)',
                            '& .MuiSelect-icon': { color: 'var(--color-light)' },
                            '& .MuiTablePagination-select': { color: 'var(--color-light)' },
                            '& .MuiTablePagination-selectLabel': { color: 'var(--color-light)' },
                            '& .MuiTablePagination-displayedRows': { color: 'var(--color-light)' }
                        }}
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={filteredData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </div>
        </div>
    </>);
}

