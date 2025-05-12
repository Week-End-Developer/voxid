// app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    Chip,
    LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

type SystemStatus = 'healthy' | 'warning' | 'error';

type Analysis = {
    id: number;
    timestamp: string;
    duration: string;
    status: string;
    accuracy: string;
};

const customStyles = {
    card: {
        background: 'var(--glass-background)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '16px',
        boxShadow: 'var(--shadow-sm)',
        padding: '24px',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: 'var(--shadow-md)',
            borderColor: 'var(--accent-3)',
        }
    },
    header: {
        fontSize: '22px',
        color: 'var(--foreground)',
        paddingBottom: '12px',
        borderBottom: '2px solid var(--border-1)',
        marginBottom: '24px',
        fontWeight: 600,
        letterSpacing: '-0.5px',
        opacity: 0.9
    },
    metricCard: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '20px',
        background: 'var(--glass-background)',
        borderRadius: '12px',
        border: '1px solid var(--glass-border)',
    },
    metricValue: {
        fontSize: '32px',
        fontWeight: 600,
        color: 'var(--color-coral)',
    },
    metricLabel: {
        fontSize: '14px',
        color: 'var(--color-light)',
        opacity: 0.8,
    },
    statusChip: {
        healthy: {
            backgroundColor: 'rgba(52, 211, 153, 0.1)',
            color: '#34D399',
            border: '1px solid #34D399',
        },
        warning: {
            backgroundColor: 'rgba(251, 191, 36, 0.1)',
            color: '#FBB724',
            border: '1px solid #FBB724',
        },
        error: {
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            color: '#EF4444',
            border: '1px solid #EF4444',
        }
    },
    tableCell: {
        color: 'var(--color-light)',
        borderBottom: '1px solid var(--glass-border)',
    },
    tableHeader: {
        color: 'var(--color-light)',
        fontWeight: 600,
        borderBottom: '1px solid var(--glass-border)',
    }
};

export default function Monitoring() {
    const [systemStatus] = useState<SystemStatus>('healthy');
    const [cpuUsage] = useState(45);
    const [memoryUsage] = useState(62);
    const [diskUsage] = useState(28);

    const recentAnalyses: Analysis[] = [
        { id: 1, timestamp: '2024-03-20 14:30:22', duration: '2.5s', status: 'Completed', accuracy: '98%' },
        { id: 2, timestamp: '2024-03-20 14:29:15', duration: '3.1s', status: 'Completed', accuracy: '96%' },
        { id: 3, timestamp: '2024-03-20 14:28:03', duration: '2.8s', status: 'Completed', accuracy: '97%' },
        { id: 4, timestamp: '2024-03-20 14:27:45', duration: '2.2s', status: 'Completed', accuracy: '99%' },
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* System Overview */}
            <Paper sx={customStyles.card}>
                <Typography sx={customStyles.header}>Sistem Durumu</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mb: 3 }}>
                    <Chip
                        label={systemStatus === 'healthy' ? 'Sistem Sağlıklı' : 'Sistem Hatası'}
                        sx={customStyles.statusChip[systemStatus]}
                    />
                    <Typography sx={{ color: 'var(--color-light)', opacity: 0.8 }}>
                        Son Güncelleme: {new Date().toLocaleTimeString()}
                    </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={customStyles.metricCard}>
                            <Typography sx={customStyles.metricLabel}>CPU Kullanımı</Typography>
                            <Typography sx={customStyles.metricValue}>{cpuUsage}%</Typography>
                            <LinearProgress 
                                variant="determinate" 
                                value={cpuUsage}
                                sx={{
                                    backgroundColor: 'rgba(227, 75, 38, 0.1)',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: 'var(--color-coral)'
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={customStyles.metricCard}>
                            <Typography sx={customStyles.metricLabel}>Bellek Kullanımı</Typography>
                            <Typography sx={customStyles.metricValue}>{memoryUsage}%</Typography>
                            <LinearProgress 
                                variant="determinate" 
                                value={memoryUsage}
                                sx={{
                                    backgroundColor: 'rgba(227, 75, 38, 0.1)',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: 'var(--color-coral)'
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={customStyles.metricCard}>
                            <Typography sx={customStyles.metricLabel}>Disk Kullanımı</Typography>
                            <Typography sx={customStyles.metricValue}>{diskUsage}%</Typography>
                            <LinearProgress 
                                variant="determinate" 
                                value={diskUsage}
                                sx={{
                                    backgroundColor: 'rgba(227, 75, 38, 0.1)',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: 'var(--color-coral)'
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Paper>

            {/* Recent Analyses */}
            <Paper sx={customStyles.card}>
                <Typography sx={customStyles.header}>Son Analizler</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={customStyles.tableHeader}>ID</TableCell>
                                <TableCell sx={customStyles.tableHeader}>Zaman</TableCell>
                                <TableCell sx={customStyles.tableHeader}>Süre</TableCell>
                                <TableCell sx={customStyles.tableHeader}>Durum</TableCell>
                                <TableCell sx={customStyles.tableHeader}>Doğruluk</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {recentAnalyses.map((analysis) => (
                                <TableRow key={analysis.id}>
                                    <TableCell sx={customStyles.tableCell}>{analysis.id}</TableCell>
                                    <TableCell sx={customStyles.tableCell}>{analysis.timestamp}</TableCell>
                                    <TableCell sx={customStyles.tableCell}>{analysis.duration}</TableCell>
                                    <TableCell sx={customStyles.tableCell}>
                                        <Chip
                                            label={analysis.status}
                                            size="small"
                                            sx={customStyles.statusChip.healthy}
                                        />
                                    </TableCell>
                                    <TableCell sx={customStyles.tableCell}>{analysis.accuracy}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            {/* System Metrics */}
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Box sx={{ flex: 1 }}>
                    <Paper sx={customStyles.card}>
                        <Typography sx={customStyles.header}>Analiz Metrikleri</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <Box sx={customStyles.metricCard}>
                                <Typography sx={customStyles.metricLabel}>
                                    Ortalama Analiz Süresi
                                </Typography>
                                <Typography sx={customStyles.metricValue}>2.65s</Typography>
                            </Box>
                            <Box sx={customStyles.metricCard}>
                                <Typography sx={customStyles.metricLabel}>
                                    Başarılı Analiz Oranı
                                </Typography>
                                <Typography sx={customStyles.metricValue}>97.5%</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Paper sx={customStyles.card}>
                        <Typography sx={customStyles.header}>Sistem Metrikleri</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <Box sx={customStyles.metricCard}>
                                <Typography sx={customStyles.metricLabel}>
                                    Aktif Kullanıcı Sayısı
                                </Typography>
                                <Typography sx={customStyles.metricValue}>24</Typography>
                            </Box>
                            <Box sx={customStyles.metricCard}>
                                <Typography sx={customStyles.metricLabel}>
                                    Toplam Analiz Sayısı (Bugün)
                                </Typography>
                                <Typography sx={customStyles.metricValue}>1,247</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}
