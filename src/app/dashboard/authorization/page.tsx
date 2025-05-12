// app/dashboard/page.tsx
'use client';

import {
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Chip,
    IconButton,
    Switch,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
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
    tableCell: {
        color: 'var(--color-light)',
        borderBottom: '1px solid var(--glass-border)',
    },
    tableHeader: {
        color: 'var(--color-light)',
        fontWeight: 600,
        borderBottom: '1px solid var(--glass-border)',
    },
    roleChip: {
        admin: {
            backgroundColor: 'rgba(227, 75, 38, 0.1)',
            color: 'var(--color-coral)',
            border: '1px solid var(--color-coral)',
        },
        moderator: {
            backgroundColor: 'rgba(0, 128, 128, 0.1)',
            color: 'var(--color-teal)',
            border: '1px solid var(--color-teal)',
        },
        user: {
            backgroundColor: 'rgba(147, 155, 159, 0.1)',
            color: '#939B9F',
            border: '1px solid #939B9F',
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
        }
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
};

type User = {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'moderator' | 'user';
    isActive: boolean;
    permissions: {
        canCreate: boolean;
        canEdit: boolean;
        canDelete: boolean;
        canExport: boolean;
    };
};

export default function Authorization() {
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: 'Ahmet Yılmaz',
            email: 'ahmet@example.com',
            role: 'admin',
            isActive: true,
            permissions: {
                canCreate: true,
                canEdit: true,
                canDelete: true,
                canExport: true,
            }
        },
        {
            id: 2,
            name: 'Mehmet Demir',
            email: 'mehmet@example.com',
            role: 'moderator',
            isActive: true,
            permissions: {
                canCreate: true,
                canEdit: true,
                canDelete: false,
                canExport: true,
            }
        },
        {
            id: 3,
            name: 'Ayşe Kaya',
            email: 'ayse@example.com',
            role: 'user',
            isActive: true,
            permissions: {
                canCreate: true,
                canEdit: false,
                canDelete: false,
                canExport: false,
            }
        },
        {
            id: 4,
            name: 'Zeynep Şahin',
            email: 'zeynep@example.com',
            role: 'moderator',
            isActive: false,
            permissions: {
                canCreate: true,
                canEdit: true,
                canDelete: false,
                canExport: true,
            }
        },
        {
            id: 5,
            name: 'Can Özkan',
            email: 'can@example.com',
            role: 'admin',
            isActive: true,
            permissions: {
                canCreate: true,
                canEdit: true,
                canDelete: true,
                canExport: true,
            }
        },
        {
            id: 6,
            name: 'Elif Yıldız',
            email: 'elif@example.com',
            role: 'user',
            isActive: true,
            permissions: {
                canCreate: true,
                canEdit: true,
                canDelete: false,
                canExport: false,
            }
        },
        {
            id: 7,
            name: 'Burak Aydın',
            email: 'burak@example.com',
            role: 'moderator',
            isActive: true,
            permissions: {
                canCreate: true,
                canEdit: true,
                canDelete: true,
                canExport: false,
            }
        },
        {
            id: 8,
            name: 'Selin Arslan',
            email: 'selin@example.com',
            role: 'user',
            isActive: false,
            permissions: {
                canCreate: false,
                canEdit: false,
                canDelete: false,
                canExport: true,
            }
        },
    ]);

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [editMode, setEditMode] = useState(false);

    const handleEditUser = (user: User) => {
        setSelectedUser(user);
        setEditMode(true);
        setOpenDialog(true);
    };

    const handleAddUser = () => {
        setSelectedUser(null);
        setEditMode(false);
        setOpenDialog(true);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Paper sx={customStyles.card}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography sx={customStyles.header}>Kullanıcı Yetkilendirme</Typography>
                    <Button
                        variant="contained"
                        startIcon={<span className="material-symbols-outlined">person_add</span>}
                        onClick={handleAddUser}
                        sx={customStyles.button.primary}
                    >
                        Yeni Kullanıcı
                    </Button>
                </Box>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={customStyles.tableHeader}>Kullanıcı</TableCell>
                                <TableCell sx={customStyles.tableHeader}>E-posta</TableCell>
                                <TableCell sx={customStyles.tableHeader}>Rol</TableCell>
                                <TableCell sx={customStyles.tableHeader}>Durum</TableCell>
                                <TableCell sx={customStyles.tableHeader}>İzinler</TableCell>
                                <TableCell sx={customStyles.tableHeader}>İşlemler</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell sx={customStyles.tableCell}>{user.name}</TableCell>
                                    <TableCell sx={customStyles.tableCell}>{user.email}</TableCell>
                                    <TableCell sx={customStyles.tableCell}>
                                        <Chip
                                            label={user.role === 'admin' ? 'Yönetici' : user.role === 'moderator' ? 'Moderatör' : 'Kullanıcı'}
                                            sx={customStyles.roleChip[user.role]}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell sx={customStyles.tableCell}>
                                        <Switch
                                            checked={user.isActive}
                                            onChange={() => {
                                                setUsers(users.map(u => 
                                                    u.id === user.id ? { ...u, isActive: !u.isActive } : u
                                                ));
                                            }}
                                            sx={{
                                                '& .MuiSwitch-switchBase.Mui-checked': {
                                                    color: 'var(--color-coral)',
                                                },
                                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                    backgroundColor: 'var(--color-coral)',
                                                },
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell sx={customStyles.tableCell}>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <Chip
                                                label="Oluştur"
                                                size="small"
                                                sx={{
                                                    ...customStyles.roleChip[user.permissions.canCreate ? 'admin' : 'user'],
                                                    height: '24px',
                                                }}
                                            />
                                            <Chip
                                                label="Düzenle"
                                                size="small"
                                                sx={{
                                                    ...customStyles.roleChip[user.permissions.canEdit ? 'admin' : 'user'],
                                                    height: '24px',
                                                }}
                                            />
                                            <Chip
                                                label="Sil"
                                                size="small"
                                                sx={{
                                                    ...customStyles.roleChip[user.permissions.canDelete ? 'admin' : 'user'],
                                                    height: '24px',
                                                }}
                                            />
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={customStyles.tableCell}>
                                        <IconButton
                                            onClick={() => handleEditUser(user)}
                                            sx={{ color: 'var(--color-light)' }}
                                        >
                                            <span className="material-symbols-outlined">edit</span>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Dialog 
                open={openDialog} 
                onClose={() => setOpenDialog(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: 'var(--background)',
                        backgroundImage: 'none',
                        maxWidth: '500px',
                        width: '100%',
                    }
                }}
            >
                <DialogTitle sx={{ color: 'var(--color-light)' }}>
                    {editMode ? 'Kullanıcı Düzenle' : 'Yeni Kullanıcı Ekle'}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                        <TextField
                            label="Ad Soyad"
                            fullWidth
                            defaultValue={selectedUser?.name}
                            sx={customStyles.inputField}
                        />
                        <TextField
                            label="E-posta"
                            type="email"
                            fullWidth
                            defaultValue={selectedUser?.email}
                            sx={customStyles.inputField}
                        />
                        <FormControl fullWidth>
                            <InputLabel sx={{ color: 'var(--color-light)', opacity: 0.9 }}>Rol</InputLabel>
                            <Select
                                defaultValue={selectedUser?.role || 'user'}
                                sx={customStyles.select}
                                label="Rol"
                            >
                                <MenuItem value="admin">Yönetici</MenuItem>
                                <MenuItem value="moderator">Moderatör</MenuItem>
                                <MenuItem value="user">Kullanıcı</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ padding: '20px' }}>
                    <Button 
                        onClick={() => setOpenDialog(false)}
                        variant="outlined"
                        sx={customStyles.button.secondary}
                    >
                        İptal
                    </Button>
                    <Button 
                        variant="contained"
                        sx={customStyles.button.primary}
                    >
                        {editMode ? 'Kaydet' : 'Ekle'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
