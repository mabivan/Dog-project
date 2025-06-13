import React, { useState, useEffect } from 'react';
import { 
  FiSearch, FiChevronRight, FiSave, 
  FiMonitor, FiImage,
  FiPackage, FiUser, FiAward,
  FiLock, FiRefreshCw, FiSettings
} from 'react-icons/fi';
import './Settings.css';

// Types
type SettingItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: 'toggle' | 'select' | 'multi-select' | 'text';
  value: any;
  options?: string[];
};

type SettingSection = {
  title: string;
  icon: React.ReactNode;
  items: SettingItem[];
};

// Simulated API calls
const fetchSettings = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        darkMode: false,
        notifications: true,
        sound: true,
        emailUpdates: true,
        locationSharing: false,
        showProfile: true,
        paymentMethods: ['Credit Card', 'PayPal'],
        preferredBreed: 'Golden Retriever',
        language: 'English',
        currency: 'USD',
        autoUpdate: true,
        backupFrequency: 'Weekly',
        twoFactorAuth: false,
        marketingEmails: true,
        chatNotifications: true,
        priceAlerts: false
      });
    }, 800);
  });
};

const saveSettings = async (settings: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Settings saved:', settings);
      resolve({ success: true });
    }, 500);
  });
};

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await fetchSettings();
        setSettings(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load settings:', error);
        setLoading(false);
      }
    };
    loadSettings();
  }, []);

  const handleChange = (key: string, value: any) => {
    setSettings((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      await saveSettings(settings);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to save settings:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const sections: SettingSection[] = [
    {
      title: 'System',
      icon: <FiMonitor />,
      items: [
        { id: 'darkMode', label: 'Dark Mode', icon: <FiMonitor />, type: 'toggle', value: settings.darkMode },
        { id: 'notifications', label: 'Notifications', icon: <FiMonitor />, type: 'toggle', value: settings.notifications },
        { id: 'sound', label: 'Notification Sound', icon: <FiMonitor />, type: 'toggle', value: settings.sound },
      ],
    },
    {
      title: 'Preferences',
      icon: <FiImage />,
      items: [
        { id: 'preferredBreed', label: 'Preferred Breed', icon: <FiImage />, type: 'select', value: settings.preferredBreed, options: ['Golden Retriever', 'Labrador', 'German Shepherd', 'Bulldog', 'Poodle'] },
        { id: 'language', label: 'Language', icon: <FiImage />, type: 'select', value: settings.language, options: ['English', 'Spanish', 'French', 'German'] },
        { id: 'currency', label: 'Currency', icon: <FiImage />, type: 'select', value: settings.currency, options: ['USD', 'EUR', 'GBP', 'JPY'] },
      ],
    },
    {
      title: 'Account',
      icon: <FiUser />,
      items: [
        { id: 'emailUpdates', label: 'Email Updates', icon: <FiUser />, type: 'toggle', value: settings.emailUpdates },
        { id: 'marketingEmails', label: 'Marketing Emails', icon: <FiUser />, type: 'toggle', value: settings.marketingEmails },
        { id: 'twoFactorAuth', label: 'Two-Factor Auth', icon: <FiUser />, type: 'toggle', value: settings.twoFactorAuth },
      ],
    },
    {
      title: 'Privacy',
      icon: <FiLock />,
      items: [
        { id: 'locationSharing', label: 'Share Location', icon: <FiLock />, type: 'toggle', value: settings.locationSharing },
        { id: 'showProfile', label: 'Show Profile', icon: <FiLock />, type: 'toggle', value: settings.showProfile },
      ],
    },
    {
      title: 'Payment',
      icon: <FiPackage />,
      items: [
        { id: 'paymentMethods', label: 'Payment Methods', icon: <FiPackage />, type: 'multi-select', value: settings.paymentMethods, options: ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery'] },
      ],
    },
    {
      title: 'Notifications',
      icon: <FiAward />,
      items: [
        { id: 'chatNotifications', label: 'Chat Notifications', icon: <FiAward />, type: 'toggle', value: settings.chatNotifications },
        { id: 'priceAlerts', label: 'Price Alerts', icon: <FiAward />, type: 'toggle', value: settings.priceAlerts },
      ],
    },
    {
      title: 'Updates',
      icon: <FiRefreshCw />,
      items: [
        { id: 'autoUpdate', label: 'Auto Update', icon: <FiRefreshCw />, type: 'toggle', value: settings.autoUpdate },
        { id: 'backupFrequency', label: 'Backup Frequency', icon: <FiRefreshCw />, type: 'select', value: settings.backupFrequency, options: ['Daily', 'Weekly', 'Monthly'] },
      ],
    }
  ];

  const filteredSections = sections
    .filter(section => 
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      section.items.some(item => item.label.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .map((section: SettingSection) => ({
      ...section,
      items: section.items.filter(item => 
        item.label.toLowerCase().includes(searchTerm.toLowerCase()))
    }));

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title);
  };

  if (loading) {
    return <div className="settings-loading">Loading settings...</div>;
  }

  return (
    <div className="settings-container">
      <h1 className="settings-header">
        <FiSettings className="header-icon" /> Settings
      </h1>
      
      <div className="settings-search">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Find a setting..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="settings-grid">
        <div className="settings-sidebar">
          {sections.map((section) => (
            <div 
              key={section.title} 
              className={`sidebar-item ${activeSection === section.title ? 'active' : ''}`}
              onClick={() => toggleSection(section.title)}
            >
              <span className="sidebar-icon">{section.icon}</span>
              <span>{section.title}</span>
              <FiChevronRight className="sidebar-chevron" />
            </div>
          ))}
        </div>

        <div className="settings-content">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <div 
                key={section.title} 
                className={`settings-section ${activeSection === section.title || activeSection === null ? 'visible' : 'hidden'}`}
              >
                <h2 className="section-title">
                  <span className="section-icon">{section.icon}</span>
                  {section.title}
                </h2>
                <div className="section-items">
                  {section.items.map((item) => (
                    <div key={item.id} className="setting-item">
                      <div className="setting-label">
                        <span className="item-icon">{item.icon}</span>
                        <label>{item.label}</label>
                      </div>
                      <div className="setting-control">
                        {item.type === 'toggle' ? (
                          <button
                            className={`toggle-btn ${item.value ? 'active' : ''}`}
                            onClick={() => handleChange(item.id, !item.value)}
                          >
                            <span>{item.value ? 'On' : 'Off'}</span>
                          </button>
                        ) : item.type === 'select' ? (
                          <select
                            value={item.value}
                            onChange={(e) => handleChange(item.id, e.target.value)}
                          >
                            {item.options?.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : item.type === 'multi-select' ? (
                          <div className="multi-select">
                            {item.options?.map((option) => (
                              <label key={option} className="checkbox-label">
                                <input
                                  type="checkbox"
                                  checked={item.value?.includes(option)}
                                  onChange={(e) => {
                                    const newValue = e.target.checked
                                      ? [...(item.value || []), option]
                                      : (item.value || []).filter((v: string) => v !== option);
                                    handleChange(item.id, newValue);
                                  }}
                                />
                                {option}
                              </label>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <FiSearch className="no-results-icon" />
              <p>No settings found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <div className="settings-footer">
        <button
          className={`save-btn ${saveStatus}`}
          onClick={handleSave}
          disabled={saveStatus === 'saving'}
        >
          {saveStatus === 'saving' ? (
            'Saving...'
          ) : saveStatus === 'success' ? (
            'Saved Successfully!'
          ) : saveStatus === 'error' ? (
            'Error Saving'
          ) : (
            <>
              <FiSave /> Save Changes
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;