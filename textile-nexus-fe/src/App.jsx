import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Toaster, toast } from 'sonner';

// Admin Components
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminLeaderboard from './components/Admin/AdminLeaderboard';
import AdminUserControls from './components/Admin/AdminUserControls';
import AdminSalesReport from './components/Admin/AdminSalesReport';
import AdminSettings from './components/Admin/AdminSettings';

// Supplier Components
import SupplierDashboard from './components/FabricSuppliers/SupplierDashboard';
import SupplierOrders from './components/FabricSuppliers/SupplierOrders';
import SupplierFabricMarket from './components/FabricSuppliers/SupplierFabricMarket';
import SupplierMessages from './components/FabricSuppliers/SupplierMessages';
import SupplierSettings from './components/FabricSuppliers/SupplierSettings';
import SupplierProfileReview from './components/FabricSuppliers/SupplierProfileReview';

// Factory Components
import FactoryDashboard from './components/Factory/FactoryDashboard';
import FactoryQRGenerator from './components/Factory/FactoryQRGenerator';
import FactoryOrders from './components/Factory/FactoryOrders';
import FactoryFabricStock from './components/Factory/FactoryFabricStock';
import FactoryMessages from './components/Factory/FactoryMessages';
import FactorySettings from './components/Factory/FactorySettings';
import FactoryDesignExplore from './components/Factory/FactoryDesignExplore';
import FactoryAICapacityPlanner from './components/Factory/FactoryAICapacityPlanner';

// Designer Components
import DesignerDashboard from './components/Designer/DesignerDashboard';
import DesignerCommunityHub from './components/Designer/DesignerCommunityHub';
import DesignerOrders from './components/Designer/DesignerOrders';
import DesignerProducts from './components/Designer/DesignerProducts';
import DesignerProductUpload from './components/Designer/DesignerProductUpload';
import DesignerProfile from './components/Designer/DesignerProfile';
import DesignerMessages from './components/Designer/DesignerMessages';
import DesignerSettings from './components/Designer/DesignerSettings';

// Tailor Components
import TailorDashboard from './components/Tailor/TailorDashboard';
import TailorCommunityHub from './components/Tailor/TailorCommunityHub';
import TailorOrders from './components/Tailor/TailorOrders';
import TailorFabricMarket from './components/Tailor/TailorFabricMarket';
import TailorAIMeasurements from './components/Tailor/TailorAIMeasurements';
import TailorMessages from './components/Tailor/TailorMessages';
import TailorSettings from './components/Tailor/TailorSettings';

// Customer Components
import CustomerDesignerExplore from './components/Customer/CustomerDesignerExplore';
import CustomerDesignerProfile from './components/Customer/CustomerDesignerProfile';
import CustomerTailorProfile from './components/Customer/CustomerTailorProfile';
import CustomerQRScanner from './components/Customer/CustomerQRScanner';
import CustomerMatchingSelection from './components/Customer/CustomerMatchingSelection';
import CustomerOutfitView from './components/Customer/CustomerOutfitView';
import CustomerMyTailor from './components/Customer/CustomerMyTailor';
import CustomerChooseTailor from './components/Customer/CustomerChooseTailor';
import CustomerChooseDesign from './components/Customer/CustomerChooseDesign';
import CustomerUploadDesign from './components/Customer/CustomerUploadDesign';
import CustomerUploadMeasurement from './components/Customer/CustomerUploadMeasurement';
import CustomerOrderDetails from './components/Customer/CustomerOrderDetails';
import CustomerPayment from './components/Customer/CustomerPayment';
import CustomerOrderTracking from './components/Customer/CustomerOrderTracking';
import CustomerCommunityHub from './components/Customer/CustomerCommunityHub';
import CustomerSettings from './components/Customer/CustomerSettings';
import Customer3DView from './components/Customer/Customer3DView';

// Auth Components
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import VerifyCode from './components/Auth/VerifyCode';
import SetPassword from './components/Auth/SetPassword';
import ProfileCreation from './components/Auth/ProfileCreation';
import LandingPage from './components/LandingPage';

// Navigation Hook Provider - Custom hook to pass navigate to components
function useAppNavigate() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine current context from URL
  const getContext = () => {
    const pathname = location.pathname;
    if (pathname.startsWith('/factory')) return 'factory';
    if (pathname.startsWith('/supplier')) return 'supplier';
    if (pathname.startsWith('/designer')) return 'designer';
    if (pathname.startsWith('/tailor')) return 'tailor';
    if (pathname.startsWith('/customer')) return 'customer';
    if (pathname.startsWith('/admin')) return 'admin';
    return 'admin';
  };

  const handleNavigate = (path) => {
    if (path === 'logout') {
      toast.success("Signed out successfully");
      navigate('/login');
      return;
    }
    const context = getContext();

    // Handle context-aware sidebar IDs
    const contextRoutes = {
      'order': {
        factory: '/factory/orders',
        supplier: '/supplier/orders',
        designer: '/designer/orders',
        tailor: '/tailor/orders',
      },
      'messages': {
        factory: '/factory/messages',
        supplier: '/supplier/messages',
        designer: '/designer/messages',
        tailor: '/tailor/messages',
      },
      'settings': {
        factory: '/factory/settings',
        supplier: '/supplier/settings',
        designer: '/designer/settings',
        tailor: '/tailor/settings',
        customer: '/customer/settings',
        admin: '/admin/settings',
      },
      'community-hub': {
        designer: '/designer/community-hub',
        tailor: '/tailor/community-hub',
        customer: '/customer/community-hub',
      },
      'products': {
        designer: '/designer/products',
        supplier: '/supplier/products',
      },
      'fabric-market': {
        tailor: '/tailor/fabric-market',
        factory: '/factory/fabric-stock',
      },
      'fabric-stock': {
        factory: '/factory/fabric-stock',
      },
      'profile': {
        designer: '/designer/profile',
      },
      'dashboard': {
        factory: '/factory/dashboard',
        supplier: '/supplier/dashboard',
        designer: '/designer/dashboard',
        tailor: '/tailor/dashboard',
        admin: '/admin/dashboard',
      },
    };

    // Check if this is a context-aware route
    if (contextRoutes[path] && contextRoutes[path][context]) {
      navigate(contextRoutes[path][context]);
      return;
    }

    // Map old view names to routes
    const routeMap = {
      // Landing
      'landing': '/',

      // Auth
      'login': '/login',
      'signup': '/signup',
      'forgot-password': '/forgot-password',
      'verify-code': '/verify-code',
      'set-password': '/set-password',
      'profile-creation': '/profile-creation',

      // Admin
      'dashboard': '/admin/dashboard',
      'leaderboard': '/admin/leaderboard',
      'user-controls': '/admin/user-controls',
      'sales-report': '/admin/sales-report',
      'admin-settings': '/admin/settings',

      // Supplier
      'supplier-dashboard': '/supplier/dashboard',
      'supplier-orders': '/supplier/orders',
      'supplier-products': '/supplier/products',
      'supplier-messages': '/supplier/messages',
      'supplier-settings': '/supplier/settings',

      // Factory
      'factory-dashboard': '/factory/dashboard',
      'factory-qr-generator': '/factory/qr-generator',
      'factory-orders': '/factory/orders',
      'factory-fabric-stock': '/factory/fabric-stock',
      'factory-messages': '/factory/messages',
      'factory-settings': '/factory/settings',
      'factory-design-explore': '/factory/design-explore',
      'factory-ai-capacity': '/factory/ai-capacity',
      'qr-generator': '/factory/qr-generator',
      'ai-capacity': '/factory/ai-capacity',
      'design-explore': '/factory/design-explore',

      // Designer
      'designer-dashboard': '/designer/dashboard',
      'designer-community-hub': '/designer/community-hub',
      'designer-orders': '/designer/orders',
      'designer-products': '/designer/products',
      'designer-product-upload': '/designer/product-upload',
      'designer-profile': '/designer/profile',
      'designer-messages': '/designer/messages',
      'designer-settings': '/designer/settings',
      'product-upload': '/designer/product-upload',

      // Tailor
      'tailor-dashboard': '/tailor/dashboard',
      'tailor-community-hub': '/tailor/community-hub',
      'tailor-orders': '/tailor/orders',
      'tailor-fabric-market': '/tailor/fabric-market',
      'tailor-ai-measurements': '/tailor/ai-measurements',
      'tailor-messages': '/tailor/messages',
      'tailor-settings': '/tailor/settings',
      'ai-measurements': '/tailor/ai-measurements',

      // Customer
      'customer-designer-explore': '/customer/designer-explore',
      'customer-designer-profile': '/customer/designer-profile',
      'customer-tailor-profile': '/customer/tailor-profile',
      'customer-qr-scanner': '/customer/qr-scanner',
      'customer-matching-selection': '/customer/matching-selection',
      'customer-outfit-view': '/customer/outfit-view',
      'customer-my-tailor': '/customer/my-tailor',
      'customer-choose-tailor': '/customer/choose-tailor',
      'customer-choose-design': '/customer/choose-design',
      'customer-upload-design': '/customer/upload-design',
      'customer-upload-measurement': '/customer/upload-measurement',
      'customer-order-details': '/customer/order-details',
      'customer-payment': '/customer/payment',
      'customer-order-tracking': '/customer/order-tracking',
      'customer-community-hub': '/customer/community-hub',
      'customer-settings': '/customer/settings',
      'customer-3d-view': '/customer/3d-view',
      'designer-explore': '/customer/designer-explore',
      'my-tailor': '/customer/my-tailor',
      'qr-scanner': '/customer/qr-scanner',
    };

    // Check if we have a direct route mapping
    if (routeMap[path]) {
      navigate(routeMap[path]);
    } else if (path.startsWith('/')) {
      // Already a path, navigate directly
      navigate(path);
    } else {
      // Try to construct a path based on context
      navigate(`/${context}/${path}`);
    }
  };

  const handleLogin = () => {
    const role = localStorage.getItem('userRole');
    const roleRoutes = {
      'Factory': '/factory/dashboard',
      'Fabric Supplier': '/supplier/dashboard',
      'Tailor': '/tailor/dashboard',
      'Customer': '/customer/designer-explore',
      'Designer': '/designer/dashboard',
      'Admin': '/admin/dashboard',
    };

    const route = roleRoutes[role] || '/admin/dashboard';
    toast.success(`Logged in as ${role || 'Admin'}`);
    navigate(route);
  };

  return { handleNavigate, handleLogin };
}

// Wrapper components for pages that need navigation
function WithNavigation({ Component }) {
  const { handleNavigate, handleLogin } = useAppNavigate();
  return <Component onNavigate={handleNavigate} onLogin={handleLogin} />;
}

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<WithNavigation Component={Login} />} />
        <Route path="/signup" element={<WithNavigation Component={Signup} />} />
        <Route path="/forgot-password" element={<WithNavigation Component={ForgotPassword} />} />
        <Route path="/verify-code" element={<WithNavigation Component={VerifyCode} />} />
        <Route path="/set-password" element={<WithNavigation Component={SetPassword} />} />
        <Route path="/profile-creation" element={<WithNavigation Component={ProfileCreation} />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<WithNavigation Component={AdminDashboard} />} />
        <Route path="/admin/leaderboard" element={<WithNavigation Component={AdminLeaderboard} />} />
        <Route path="/admin/user-controls" element={<WithNavigation Component={AdminUserControls} />} />
        <Route path="/admin/sales-report" element={<WithNavigation Component={AdminSalesReport} />} />
        <Route path="/admin/settings" element={<WithNavigation Component={AdminSettings} />} />

        {/* Supplier Routes */}
        <Route path="/supplier/dashboard" element={<WithNavigation Component={SupplierDashboard} />} />
        <Route path="/supplier/orders" element={<WithNavigation Component={SupplierOrders} />} />
        <Route path="/supplier/products" element={<WithNavigation Component={SupplierFabricMarket} />} />
        <Route path="/supplier/messages" element={<WithNavigation Component={SupplierMessages} />} />
        <Route path="/supplier/settings" element={<WithNavigation Component={SupplierSettings} />} />
        <Route path="/supplier/profile-review" element={<SupplierProfileReview />} />

        {/* Factory Routes */}
        <Route path="/factory/dashboard" element={<WithNavigation Component={FactoryDashboard} />} />
        <Route path="/factory/qr-generator" element={<WithNavigation Component={FactoryQRGenerator} />} />
        <Route path="/factory/orders" element={<WithNavigation Component={FactoryOrders} />} />
        <Route path="/factory/fabric-stock" element={<WithNavigation Component={FactoryFabricStock} />} />
        <Route path="/factory/messages" element={<WithNavigation Component={FactoryMessages} />} />
        <Route path="/factory/settings" element={<WithNavigation Component={FactorySettings} />} />
        <Route path="/factory/design-explore" element={<WithNavigation Component={FactoryDesignExplore} />} />
        <Route path="/factory/ai-capacity" element={<WithNavigation Component={FactoryAICapacityPlanner} />} />

        {/* Designer Routes */}
        <Route path="/designer/dashboard" element={<WithNavigation Component={DesignerDashboard} />} />
        <Route path="/designer/community-hub" element={<WithNavigation Component={DesignerCommunityHub} />} />
        <Route path="/designer/orders" element={<WithNavigation Component={DesignerOrders} />} />
        <Route path="/designer/products" element={<WithNavigation Component={DesignerProducts} />} />
        <Route path="/designer/product-upload" element={<WithNavigation Component={DesignerProductUpload} />} />
        <Route path="/designer/profile" element={<WithNavigation Component={DesignerProfile} />} />
        <Route path="/designer/messages" element={<WithNavigation Component={DesignerMessages} />} />
        <Route path="/designer/settings" element={<WithNavigation Component={DesignerSettings} />} />

        {/* Tailor Routes */}
        <Route path="/tailor/dashboard" element={<WithNavigation Component={TailorDashboard} />} />
        <Route path="/tailor/community-hub" element={<WithNavigation Component={TailorCommunityHub} />} />
        <Route path="/tailor/orders" element={<WithNavigation Component={TailorOrders} />} />
        <Route path="/tailor/fabric-market" element={<WithNavigation Component={TailorFabricMarket} />} />
        <Route path="/tailor/ai-measurements" element={<WithNavigation Component={TailorAIMeasurements} />} />
        <Route path="/tailor/messages" element={<WithNavigation Component={TailorMessages} />} />
        <Route path="/tailor/settings" element={<WithNavigation Component={TailorSettings} />} />

        {/* Customer Routes */}
        <Route path="/customer/designer-explore" element={<WithNavigation Component={CustomerDesignerExplore} />} />
        <Route path="/customer/designer-profile" element={<WithNavigation Component={CustomerDesignerProfile} />} />
        <Route path="/customer/tailor-profile" element={<WithNavigation Component={CustomerTailorProfile} />} />
        <Route path="/customer/qr-scanner" element={<WithNavigation Component={CustomerQRScanner} />} />
        <Route path="/customer/matching-selection" element={<WithNavigation Component={CustomerMatchingSelection} />} />
        <Route path="/customer/outfit-view" element={<WithNavigation Component={CustomerOutfitView} />} />
        <Route path="/customer/my-tailor" element={<WithNavigation Component={CustomerMyTailor} />} />
        <Route path="/customer/choose-tailor" element={<WithNavigation Component={CustomerChooseTailor} />} />
        <Route path="/customer/choose-design" element={<WithNavigation Component={CustomerChooseDesign} />} />
        <Route path="/customer/upload-design" element={<WithNavigation Component={CustomerUploadDesign} />} />
        <Route path="/customer/upload-measurement" element={<WithNavigation Component={CustomerUploadMeasurement} />} />
        <Route path="/customer/order-details" element={<WithNavigation Component={CustomerOrderDetails} />} />
        <Route path="/customer/payment" element={<WithNavigation Component={CustomerPayment} />} />
        <Route path="/customer/order-tracking" element={<WithNavigation Component={CustomerOrderTracking} />} />
        <Route path="/customer/community-hub" element={<WithNavigation Component={CustomerCommunityHub} />} />
        <Route path="/customer/settings" element={<WithNavigation Component={CustomerSettings} />} />
        <Route path="/customer/3d-view" element={<WithNavigation Component={Customer3DView} />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}
