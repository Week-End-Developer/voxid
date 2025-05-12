// app/dashboard/page.tsx
'use client';

import {
    Box,
    Typography,
    Paper,
    Switch,
    Slider,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    TextField,
    Divider,
    Button,
} from '@mui/material';
import { useState } from 'react';

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
    slider: {
        color: 'var(--color-coral)',
        '& .MuiSlider-thumb': {
            backgroundColor: 'var(--color-coral)',
            '&:hover, &.Mui-active': {
                boxShadow: '0 0 0 8px rgba(227, 75, 38, 0.16)',
            }
        },
        '& .MuiSlider-track': {
            backgroundColor: 'var(--color-coral)',
            opacity: 0.8
        },
        '& .MuiSlider-rail': {
            backgroundColor: 'rgba(227, 75, 38, 0.1)',
        }
    },
    switch: {
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: 'var(--color-coral)',
            '& + .MuiSwitch-track': {
                backgroundColor: 'var(--color-coral)',
                opacity: 0.5,
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
        }
    }
};

export default function Settings() {
    // Voice Analysis Settings
    const [minFrequency, setMinFrequency] = useState(300);
    const [maxFrequency, setMaxFrequency] = useState(3400);
    const [sampleRate, setSampleRate] = useState(16000);
    const [audioFormat, setAudioFormat] = useState('wav');
    
    // Comparison Settings
    const [similarityThreshold, setSimilarityThreshold] = useState(75);
    const [mosThreshold, setMosThreshold] = useState(3.0);
    const [enableNoiseReduction, setEnableNoiseReduction] = useState(true);
    const [noiseThreshold, setNoiseThreshold] = useState(-30);
    
    // System Settings
    const [maxConcurrentProcesses, setMaxConcurrentProcesses] = useState(4);
    const [maxFileSize, setMaxFileSize] = useState(10);
    const [autoDeleteDays, setAutoDeleteDays] = useState(30);
    const [enableCache, setEnableCache] = useState(true);

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                height: 'fit-content'
            }}>
                {/* Voice Analysis Settings */}
                <Paper sx={customStyles.card}>
                    <Typography sx={customStyles.header}>Ses Analiz Ayarları</Typography>
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
                                Örnekleme Hızı
                            </InputLabel>
                            <Select
                                value={sampleRate}
                                onChange={(e) => setSampleRate(Number(e.target.value))}
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
                                <MenuItem value={8000} sx={customStyles.menuItem}>8 kHz</MenuItem>
                                <MenuItem value={16000} sx={customStyles.menuItem}>16 kHz</MenuItem>
                                <MenuItem value={22050} sx={customStyles.menuItem}>22.05 kHz</MenuItem>
                                <MenuItem value={44100} sx={customStyles.menuItem}>44.1 kHz</MenuItem>
                                <MenuItem value={48000} sx={customStyles.menuItem}>48 kHz</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel sx={{ color: 'var(--color-light)', opacity: 0.9 }}>
                                Ses Dosya Formatı
                            </InputLabel>
                            <Select
                                value={audioFormat}
                                onChange={(e) => setAudioFormat(e.target.value)}
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
                                <MenuItem value="wav" sx={customStyles.menuItem}>WAV</MenuItem>
                                <MenuItem value="mp3" sx={customStyles.menuItem}>MP3</MenuItem>
                                <MenuItem value="ogg" sx={customStyles.menuItem}>OGG</MenuItem>
                                <MenuItem value="flac" sx={customStyles.menuItem}>FLAC</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Paper>

                {/* Comparison Settings */}
                <Paper sx={customStyles.card}>
                    <Typography sx={customStyles.header}>Karşılaştırma Ayarları</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div>
                            <Typography sx={{ color: 'var(--color-light)', mb: 2, opacity: 0.9 }}>
                                Benzerlik Eşiği (%)
                            </Typography>
                            <Slider
                                value={similarityThreshold}
                                onChange={(_, value) => setSimilarityThreshold(value as number)}
                                sx={customStyles.slider}
                            />
                        </div>

                        <div>
                            <Typography sx={{ color: 'var(--color-light)', mb: 2, opacity: 0.9 }}>
                                MOS Eşik Değeri
                            </Typography>
                            <Slider
                                value={mosThreshold}
                                min={1}
                                max={5}
                                step={0.1}
                                onChange={(_, value) => setMosThreshold(value as number)}
                                sx={customStyles.slider}
                            />
                        </div>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ color: 'var(--color-light)', opacity: 0.9 }}>
                                Gürültü Azaltma
                            </Typography>
                            <Switch
                                checked={enableNoiseReduction}
                                onChange={(e) => setEnableNoiseReduction(e.target.checked)}
                                sx={customStyles.switch}
                            />
                        </Box>

                        <div>
                            <Typography sx={{ color: 'var(--color-light)', mb: 2, opacity: 0.9 }}>
                                Gürültü Eşiği (dB)
                            </Typography>
                            <Slider
                                value={noiseThreshold}
                                min={-60}
                                max={0}
                                onChange={(_, value) => setNoiseThreshold(value as number)}
                                sx={customStyles.slider}
                            />
                        </div>
                    </Box>
                </Paper>
            </div>

            {/* System Settings */}
            <Paper sx={{
                ...customStyles.card,
                gridColumn: 'span 2'
            }}>
                <Typography sx={customStyles.header}>Sistem Ayarları</Typography>
                <Box sx={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '24px'
                }}>
                    <TextField
                        label="Maksimum Eşzamanlı İşlem"
                        type="number"
                        value={maxConcurrentProcesses}
                        onChange={(e) => setMaxConcurrentProcesses(Number(e.target.value))}
                        sx={customStyles.inputField}
                    />

                    <TextField
                        label="Maksimum Dosya Boyutu (MB)"
                        type="number"
                        value={maxFileSize}
                        onChange={(e) => setMaxFileSize(Number(e.target.value))}
                        sx={customStyles.inputField}
                    />

                    <TextField
                        label="Otomatik Silme Süresi (Gün)"
                        type="number"
                        value={autoDeleteDays}
                        onChange={(e) => setAutoDeleteDays(Number(e.target.value))}
                        sx={customStyles.inputField}
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ color: 'var(--color-light)', opacity: 0.9 }}>
                            Önbellek Kullan
                        </Typography>
                        <Switch
                            checked={enableCache}
                            onChange={(e) => setEnableCache(e.target.checked)}
                            sx={customStyles.switch}
                        />
                    </Box>
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
                    sx={customStyles.button.secondary}
                >
                    Varsayılana Döndür
                </Button>
                <Button
                    variant="contained"
                    startIcon={<span className="material-symbols-outlined">save</span>}
                    sx={customStyles.button.primary}
                >
                    Ayarları Kaydet
                </Button>
            </Box>
        </div>
    );
}
