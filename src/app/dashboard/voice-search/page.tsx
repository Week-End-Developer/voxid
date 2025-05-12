// app/dashboard/page.tsx
'use client';

import {
    Box,
    Button,
    Typography,
    Paper,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    IconButton,
} from '@mui/material';
import { useState } from 'react';
import AudioWaveContainer from "@/app/components/AudioWaveContainer";

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
    inputField: {
        '& .MuiOutlinedInput-root': {
            color: 'var(--color-light)',
            backgroundColor: 'var(--glass-background)',
            backdropFilter: 'blur(5px)',
            borderRadius: '8px',
            '& fieldset': {
                borderColor: 'var(--glass-border)',
            },
            '&:hover fieldset': {
                borderColor: 'var(--color-coral)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--color-coral)',
            }
        },
        '& .MuiInputLabel-root': {
            color: 'var(--color-light)',
            opacity: 0.9
        }
    },
    select: {
        color: 'var(--color-light)',
        backgroundColor: 'var(--glass-background)',
        backdropFilter: 'blur(5px)',
        borderRadius: '8px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--glass-border)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--color-coral)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--color-coral)',
        },
        '& .MuiSelect-icon': {
            color: 'var(--color-light)',
        },
        '& .MuiMenuItem-root': {
            color: 'var(--color-light)',
        }
    },
    menuItem: {
        '&.MuiMenuItem-root': {
            color: 'var(--color-light)',
            backgroundColor: 'var(--glass-background)',
            '&:hover': {
                backgroundColor: 'rgba(227, 75, 38, 0.1)',
            },
            '&.Mui-selected': {
                backgroundColor: 'rgba(227, 75, 38, 0.2)',
                '&:hover': {
                    backgroundColor: 'rgba(227, 75, 38, 0.3)',
                }
            }
        }
    },
    button: {
        primary: {
            backgroundColor: 'var(--color-coral)',
            color: 'var(--color-light)',
            '&:hover': {
                backgroundColor: 'var(--color-teal)',
            }
        },
        secondary: {
            borderColor: 'var(--glass-border)',
            color: 'var(--color-light)',
            '&:hover': {
                borderColor: 'var(--color-coral)',
                backgroundColor: 'rgba(227, 75, 38, 0.1)',
            }
        },
        clear: {
            borderColor: 'var(--color-teal)',
            color: 'var(--color-teal)',
            backgroundColor: 'rgba(0, 128, 128, 0.1)',
            '&:hover': {
                borderColor: 'var(--color-teal)',
                backgroundColor: 'rgba(0, 128, 128, 0.2)',
                color: 'var(--color-teal)'
            }
        }
    }
};

export default function VoiceSearch() {
    const [searchMethod, setSearchMethod] = useState('file');
    const [minFrequency, setMinFrequency] = useState(300);
    const [maxFrequency, setMaxFrequency] = useState(3400);
    const [gender, setGender] = useState('all');
    const [ageRange, setAgeRange] = useState('all');

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                height: 'fit-content'
            }}>
                {/* Voice Input */}
                <Paper sx={customStyles.card}>
                    <Typography sx={customStyles.header}>Ses Girişi</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: 'var(--color-light)', opacity: 0.9 }}>
                                Arama Yöntemi
                            </InputLabel>
                            <Select
                                value={searchMethod}
                                onChange={(e) => setSearchMethod(e.target.value)}
                                sx={customStyles.select}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: 'var(--glass-background)',
                                            backdropFilter: 'blur(10px)',
                                            '& .MuiMenuItem-root': {
                                                color: 'var(--color-light)',
                                            },
                                            '& .MuiList-root': {
                                                padding: '8px',
                                            }
                                        }
                                    }
                                }}
                            >
                                <MenuItem value="file" sx={customStyles.menuItem}>Dosya Yükle</MenuItem>
                                <MenuItem value="record" sx={customStyles.menuItem}>Ses Kaydet</MenuItem>
                                <MenuItem value="stream" sx={customStyles.menuItem}>Canlı Akış</MenuItem>
                            </Select>
                        </FormControl>

                        {searchMethod === 'file' && (
                            <Button
                                variant="outlined"
                                component="label"
                                startIcon={<span className="material-symbols-outlined">upload_file</span>}
                                sx={customStyles.button.secondary}
                            >
                                Dosya Seç
                                <input type="file" hidden accept="audio/*" />
                            </Button>
                        )}

                        {searchMethod === 'record' && (
                            <Button
                                variant="contained"
                                startIcon={<span className="material-symbols-outlined">mic</span>}
                                sx={customStyles.button.primary}
                            >
                                Kayıt Başlat
                            </Button>
                        )}

                        {searchMethod === 'stream' && (
                            <Button
                                variant="contained"
                                startIcon={<span className="material-symbols-outlined">stream</span>}
                                sx={customStyles.button.primary}
                            >
                                Akışı Başlat
                            </Button>
                        )}

                        <Box sx={{ height: '100px', background: 'var(--glass-background)', borderRadius: '8px', p: 2 }}>
                            <AudioWaveContainer />
                        </Box>
                    </Box>
                </Paper>

                {/* Search Filters */}
                <Paper sx={customStyles.card}>
                    <Typography sx={customStyles.header}>Arama Filtreleri</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div>
                            <Typography sx={{ color: 'var(--color-light)', mb: 2, opacity: 0.9 }}>
                                Frekans Aralığı (Hz)
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 4 }}>
                                <TextField
                                    label="Min Frekans"
                                    type="number"
                                    value={minFrequency}
                                    onChange={(e) => setMinFrequency(Number(e.target.value))}
                                    sx={customStyles.inputField}
                                    fullWidth
                                />
                                <TextField
                                    label="Max Frekans"
                                    type="number"
                                    value={maxFrequency}
                                    onChange={(e) => setMaxFrequency(Number(e.target.value))}
                                    sx={customStyles.inputField}
                                    fullWidth
                                />
                            </Box>
                        </div>

                        <FormControl fullWidth>
                            <InputLabel sx={{ color: 'var(--color-light)', opacity: 0.9 }}>
                                Cinsiyet
                            </InputLabel>
                            <Select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                sx={customStyles.select}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: 'var(--glass-background)',
                                            backdropFilter: 'blur(10px)',
                                            '& .MuiMenuItem-root': {
                                                color: 'var(--color-light)',
                                            },
                                            '& .MuiList-root': {
                                                padding: '8px',
                                            }
                                        }
                                    }
                                }}
                            >
                                <MenuItem value="all" sx={customStyles.menuItem}>Tümü</MenuItem>
                                <MenuItem value="male" sx={customStyles.menuItem}>Erkek</MenuItem>
                                <MenuItem value="female" sx={customStyles.menuItem}>Kadın</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel sx={{ color: 'var(--color-light)', opacity: 0.9 }}>
                                Yaş Aralığı
                            </InputLabel>
                            <Select
                                value={ageRange}
                                onChange={(e) => setAgeRange(e.target.value)}
                                sx={customStyles.select}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            bgcolor: 'var(--glass-background)',
                                            backdropFilter: 'blur(10px)',
                                            '& .MuiMenuItem-root': {
                                                color: 'var(--color-light)',
                                            },
                                            '& .MuiList-root': {
                                                padding: '8px',
                                            }
                                        }
                                    }
                                }}
                            >
                                <MenuItem value="all" sx={customStyles.menuItem}>Tümü</MenuItem>
                                <MenuItem value="18-25" sx={customStyles.menuItem}>18-25</MenuItem>
                                <MenuItem value="26-35" sx={customStyles.menuItem}>26-35</MenuItem>
                                <MenuItem value="36-45" sx={customStyles.menuItem}>36-45</MenuItem>
                                <MenuItem value="46+" sx={customStyles.menuItem}>46+</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Paper>
            </div>

            {/* Results Section */}
            <Paper sx={customStyles.card}>
                <Typography sx={customStyles.header}>Arama Sonuçları</Typography>
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    minHeight: '200px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--color-coral)', opacity: 0.5 }}>
                        search
                    </span>
                    <Typography sx={{ color: 'var(--color-light)', opacity: 0.5 }}>
                        Arama yapmak için ses girişi yapın ve filtreleri ayarlayın
                    </Typography>
                </Box>
            </Paper>

            <Box sx={{ 
                display: 'flex', 
                gap: '16px', 
                justifyContent: 'flex-end',
                mt: 'auto',
                pb: 2
            }}>
                <Button
                    variant="outlined"
                    startIcon={<span className="material-symbols-outlined">refresh</span>}
                    sx={customStyles.button.clear}
                >
                    Temizle
                </Button>
                <Button
                    variant="contained"
                    startIcon={<span className="material-symbols-outlined">search</span>}
                    sx={customStyles.button.primary}
                >
                    Aramayı Başlat
                </Button>
            </Box>
        </div>
    );
}
