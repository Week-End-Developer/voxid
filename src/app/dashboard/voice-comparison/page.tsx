// app/dashboard/page.tsx
'use client';

import Image from "next/image";
import {
    Box,
    Button,
    Typography,
    Paper,
    TextField,
    InputAdornment,
} from '@mui/material';
import AudioWaveContainer from "@/app/components/AudioWaveContainer";

export default function VoiceComparison() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* User Voice Profile Cards */}
            <div style={{ display: 'flex', gap: '20px' }}>
                {/* First Voice Profile */}
                <div className="styled-card-1" style={{ flex: 1, borderRadius: '16px' }}>
                    <div className="card-header">Ses 1 - Dosya Yükle</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                            <Image
                                src="/customer.jpg"
                                alt="User"
                                width={150}
                                height={150}
                                style={{ borderRadius: '50%' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{
                                    flex: 1,
                                    borderColor: 'var(--glass-border)',
                                    color: 'var(--color-light)',
                                    '&:hover': {
                                        borderColor: 'var(--color-coral)',
                                    }
                                }}
                            >
                                Dosya Seç
                                <input type="file" hidden />
                            </Button>
                            <TextField
                                placeholder="Sistemden Ara"
                                size="small"
                                sx={{
                                    flex: 1,
                                    '& .MuiOutlinedInput-root': {
                                        color: 'var(--color-light)',
                                        borderRadius: '16px',
                                        '& fieldset': {
                                            borderColor: 'var(--glass-border)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'var(--color-coral)',
                                        },
                                        backgroundColor: 'var(--glass-background)',
                                    }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <span className="material-symbols-outlined" style={{ color: 'var(--color-light)' }}>
                                                search
                                            </span>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>tag</span>
                                <span>Müşteri No:</span>
                                <span style={{ color: 'var(--color-teal)' }}>100123</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>badge</span>
                                <span>Kimlik No:</span>
                                <span style={{ color: 'var(--color-teal)' }}>98******01</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>person</span>
                                <span>Ad Soyad:</span>
                                <span style={{ color: 'var(--color-teal)' }}>Ali Vural</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>male</span>
                                <span>Cinsiyet:</span>
                                <span style={{ color: 'var(--color-teal)' }}>Erkek</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>cake</span>
                                <span>Yaş:</span>
                                <span style={{ color: 'var(--color-teal)' }}>34</span>
                            </div>
                        </div>

                        <div>
                            <Typography variant="body2" style={{ marginBottom: '8px' }}>
                                Ses Frekansı: 450 Hz
                            </Typography>
                            <div style={{ 
                                height: '8px', 
                                background: 'var(--color-coral)', 
                                width: '75%', 
                                borderRadius: '4px',
                                marginBottom: '16px'
                            }} />
                            <AudioWaveContainer />
                        </div>
                    </div>
                </div>

                {/* Second Voice Profile */}
                <div className="styled-card-1" style={{ flex: 1, borderRadius: '16px' }}>
                    <div className="card-header">Ses 2 - Dosya Yükle</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                            <Image
                                src="/customer.jpg"
                                alt="User"
                                width={150}
                                height={150}
                                style={{ borderRadius: '50%' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{
                                    flex: 1,
                                    borderColor: 'var(--glass-border)',
                                    color: 'var(--color-light)',
                                    '&:hover': {
                                        borderColor: 'var(--color-coral)',
                                    }
                                }}
                            >
                                Dosya Seç
                                <input type="file" hidden />
                            </Button>
                            <TextField
                                placeholder="Sistemden Ara"
                                size="small"
                                sx={{
                                    flex: 1,
                                    '& .MuiOutlinedInput-root': {
                                        color: 'var(--color-light)',
                                        borderRadius: '16px',
                                        '& fieldset': {
                                            borderColor: 'var(--glass-border)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'var(--color-coral)',
                                        },
                                        backgroundColor: 'var(--glass-background)',
                                    }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <span className="material-symbols-outlined" style={{ color: 'var(--color-light)' }}>
                                                search
                                            </span>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>tag</span>
                                <span>Müşteri No:</span>
                                <span style={{ color: 'var(--color-teal)' }}>100456</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>badge</span>
                                <span>Kimlik No:</span>
                                <span style={{ color: 'var(--color-teal)' }}>12******34</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>person</span>
                                <span>Ad Soyad:</span>
                                <span style={{ color: 'var(--color-teal)' }}>Ayşe Demir</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>male</span>
                                <span>Cinsiyet:</span>
                                <span style={{ color: 'var(--color-teal)' }}>Erkek</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <span className="material-symbols-outlined" style={{ color: 'var(--color-coral)' }}>cake</span>
                                <span>Yaş:</span>
                                <span style={{ color: 'var(--color-teal)' }}>29</span>
                            </div>
                        </div>

                        <div>
                            <Typography variant="body2" style={{ marginBottom: '8px' }}>
                                Ses Frekansı: 420 Hz
                            </Typography>
                            <div style={{ 
                                height: '8px', 
                                background: 'var(--color-coral)', 
                                width: '65%', 
                                borderRadius: '4px',
                                marginBottom: '16px'
                            }} />
                            <AudioWaveContainer />
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Results */}
            <div className="styled-card-1" style={{ borderRadius: '16px', marginBottom: '20px' }}>
                <div className="card-header">Karşılaştırma Sonucu</div>
                <div style={{ display: 'flex', gap: '40px', padding: '20px 0' }}>
                    <div style={{ flex: 1 }}>
                        <Typography variant="body2" style={{ marginBottom: '8px', color: 'var(--color-light)' }}>
                            Benzerlik Oranı
                        </Typography>
                        <div style={{ 
                            height: '8px', 
                            background: 'var(--color-coral)', 
                            width: '76%', 
                            borderRadius: '4px',
                            marginBottom: '4px'
                        }} />
                        <Typography variant="body2" style={{ color: 'var(--color-teal)' }}>
                            76% benzer
                        </Typography>
                    </div>

                    <div style={{ flex: 1 }}>
                        <Typography variant="body2" style={{ marginBottom: '8px', color: 'var(--color-light)' }}>
                            Frekans Uyumu
                        </Typography>
                        <div style={{ 
                            height: '8px', 
                            background: 'var(--color-teal)', 
                            width: '65%', 
                            borderRadius: '4px',
                            marginBottom: '4px'
                        }} />
                        <Typography variant="body2" style={{ color: 'var(--color-teal)' }}>
                            Orta düzey uyum
                        </Typography>
                    </div>

                    <div style={{ flex: 1 }}>
                        <Typography variant="body2" style={{ marginBottom: '8px', color: 'var(--color-light)' }}>
                            Mos Değeri
                        </Typography>
                        <div style={{ 
                            height: '8px', 
                            background: 'var(--color-coral)', 
                            width: '85%', 
                            borderRadius: '4px',
                            marginBottom: '4px'
                        }} />
                        <Typography variant="body2" style={{ color: 'var(--color-teal)' }}>
                            3.54
                        </Typography>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <Button
                        variant="contained"
                        startIcon={<span className="material-symbols-outlined">play_arrow</span>}
                        sx={{ 
                            backgroundColor: 'var(--color-coral)',
                            '&:hover': {
                                backgroundColor: 'var(--color-teal)',
                            }
                        }}
                    >
                        İşlemi Başlat
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<span className="material-symbols-outlined">refresh</span>}
                        sx={{ 
                            borderColor: 'var(--glass-border)',
                            color: 'var(--color-light)',
                            '&:hover': {
                                borderColor: 'var(--color-coral)',
                            }
                        }}
                    >
                        Yeni İşlem
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<span className="material-symbols-outlined">download</span>}
                        sx={{ 
                            borderColor: 'var(--glass-border)',
                            color: 'var(--color-light)',
                            '&:hover': {
                                borderColor: 'var(--color-coral)',
                            }
                        }}
                    >
                        Raporu İndir
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<span className="material-symbols-outlined">delete</span>}
                        sx={{ 
                            borderColor: 'var(--color-coral)',
                            color: 'var(--color-coral)',
                            '&:hover': {
                                borderColor: 'var(--color-coral)',
                                backgroundColor: 'rgba(227, 75, 38, 0.1)',
                            }
                        }}
                    >
                        Temizle
                    </Button>
                </div>
            </div>
        </div>
    );
}
