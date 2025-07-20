import type React from "react";
import { useState } from "react";
import {
	AiOutlineCamera,
	AiOutlineCheck,
	AiOutlineClose,
	AiOutlineDelete,
	AiOutlineDownload,
	AiOutlineEdit,
	AiOutlineFileText,
	AiOutlineFolder,
	AiOutlineHeart,
	// Simple icons that definitely exist
	AiOutlineHome,
	AiOutlineMail,
	AiOutlineMinus,
	AiOutlinePhone,
	AiOutlinePlus,
	AiOutlineSearch,
	AiOutlineSetting,
	AiOutlineStar,
	AiOutlineUpload,
	AiOutlineUser,
} from "react-icons/ai";
import {
	FaArrowDown,
	FaArrowLeft,
	FaArrowRight,
	FaArrowUp,
	FaBell,
	FaBicycle,
	FaBuilding,
	FaCalendar,
	FaCamera,
	FaCar,
	FaCheck,
	FaClock,
	FaCog,
	FaComments,
	FaDesktop,
	FaDownload,
	FaEdit,
	FaEnvelope,
	FaFacebook,
	FaFile,
	FaFlag,
	FaFolder,
	FaGamepad,
	FaGift,
	FaGithub,
	FaHeadphones,
	FaHeart,
	// Font Awesome Icons - Basic
	FaHome,
	FaInstagram,
	FaLaptop,
	FaLinkedin,
	FaMap,
	FaMicrophone,
	FaMinus,
	FaMobile,
	FaMusic,
	FaPhone,
	FaPlane,
	FaPlus,
	FaSearch,
	FaShare,
	FaShip,
	FaShoppingCart,
	FaStar,
	FaThumbsDown,
	FaThumbsUp,
	FaTimes,
	FaTrain,
	FaTrash,
	FaTwitter,
	FaUpload,
	FaUser,
	FaVideo,
	FaWifi,
	FaYoutube,
} from "react-icons/fa";
import {
	MdAccessTime,
	MdAdd,
	MdArrowBack,
	MdArrowDownward,
	MdArrowForward,
	MdArrowUpward,
	MdCalendarToday,
	MdCamera,
	MdCheck,
	MdClose,
	MdComment,
	MdDelete,
	MdDescription,
	MdEdit,
	MdEmail,
	MdFavorite,
	MdFileDownload,
	MdFileUpload,
	MdFlag,
	MdFolder,
	// Material Design Icons - Commonly used
	MdHome,
	MdLocationOn,
	MdMusicNote,
	MdNotifications,
	MdPerson,
	MdPhone,
	MdRemove,
	MdSearch,
	MdSettings,
	MdShare,
	MdShoppingCart,
	MdStar,
	MdThumbDown,
	MdThumbUp,
	MdVideocam,
} from "react-icons/md";

interface IconGalleryProps {
	size?: number;
	color?: string;
	showLabels?: boolean;
	category?: "all" | "fontawesome" | "material" | "antdesign";
}

const iconSets = {
	fontawesome: [
		{ icon: FaHome, name: "Home" },
		{ icon: FaUser, name: "User" },
		{ icon: FaHeart, name: "Heart" },
		{ icon: FaStar, name: "Star" },
		{ icon: FaSearch, name: "Search" },
		{ icon: FaCog, name: "Settings" },
		{ icon: FaEnvelope, name: "Email" },
		{ icon: FaPhone, name: "Phone" },
		{ icon: FaCamera, name: "Camera" },
		{ icon: FaMusic, name: "Music" },
		{ icon: FaVideo, name: "Video" },
		{ icon: FaFile, name: "File" },
		{ icon: FaFolder, name: "Folder" },
		{ icon: FaDownload, name: "Download" },
		{ icon: FaUpload, name: "Upload" },
		{ icon: FaTrash, name: "Trash" },
		{ icon: FaEdit, name: "Edit" },
		{ icon: FaPlus, name: "Plus" },
		{ icon: FaMinus, name: "Minus" },
		{ icon: FaCheck, name: "Check" },
		{ icon: FaTimes, name: "Times" },
		{ icon: FaArrowRight, name: "Arrow Right" },
		{ icon: FaArrowLeft, name: "Arrow Left" },
		{ icon: FaArrowUp, name: "Arrow Up" },
		{ icon: FaArrowDown, name: "Arrow Down" },
		{ icon: FaShoppingCart, name: "Shopping Cart" },
		{ icon: FaGift, name: "Gift" },
		{ icon: FaCalendar, name: "Calendar" },
		{ icon: FaClock, name: "Clock" },
		{ icon: FaMap, name: "Map" },
		{ icon: FaGamepad, name: "Gamepad" },
		{ icon: FaBell, name: "Bell" },
		{ icon: FaFlag, name: "Flag" },
		{ icon: FaThumbsUp, name: "Thumbs Up" },
		{ icon: FaThumbsDown, name: "Thumbs Down" },
		{ icon: FaComments, name: "Comments" },
		{ icon: FaShare, name: "Share" },
		{ icon: FaBuilding, name: "Building" },
		{ icon: FaCar, name: "Car" },
		{ icon: FaPlane, name: "Plane" },
		{ icon: FaTrain, name: "Train" },
		{ icon: FaShip, name: "Ship" },
		{ icon: FaBicycle, name: "Bicycle" },
		{ icon: FaLaptop, name: "Laptop" },
		{ icon: FaMobile, name: "Mobile" },
		{ icon: FaDesktop, name: "Desktop" },
		{ icon: FaHeadphones, name: "Headphones" },
		{ icon: FaMicrophone, name: "Microphone" },
		{ icon: FaWifi, name: "Wifi" },
		{ icon: FaFacebook, name: "Facebook" },
		{ icon: FaTwitter, name: "Twitter" },
		{ icon: FaInstagram, name: "Instagram" },
		{ icon: FaLinkedin, name: "LinkedIn" },
		{ icon: FaGithub, name: "GitHub" },
		{ icon: FaYoutube, name: "YouTube" },
	],
	material: [
		{ icon: MdHome, name: "Home" },
		{ icon: MdPerson, name: "Person" },
		{ icon: MdFavorite, name: "Favorite" },
		{ icon: MdStar, name: "Star" },
		{ icon: MdSearch, name: "Search" },
		{ icon: MdSettings, name: "Settings" },
		{ icon: MdEmail, name: "Email" },
		{ icon: MdPhone, name: "Phone" },
		{ icon: MdCamera, name: "Camera" },
		{ icon: MdMusicNote, name: "Music" },
		{ icon: MdVideocam, name: "Video" },
		{ icon: MdDescription, name: "Document" },
		{ icon: MdFolder, name: "Folder" },
		{ icon: MdFileDownload, name: "Download" },
		{ icon: MdFileUpload, name: "Upload" },
		{ icon: MdDelete, name: "Delete" },
		{ icon: MdEdit, name: "Edit" },
		{ icon: MdAdd, name: "Add" },
		{ icon: MdRemove, name: "Remove" },
		{ icon: MdCheck, name: "Check" },
		{ icon: MdClose, name: "Close" },
		{ icon: MdArrowForward, name: "Arrow Forward" },
		{ icon: MdArrowBack, name: "Arrow Back" },
		{ icon: MdArrowUpward, name: "Arrow Up" },
		{ icon: MdArrowDownward, name: "Arrow Down" },
		{ icon: MdShoppingCart, name: "Shopping Cart" },
		{ icon: MdCalendarToday, name: "Calendar" },
		{ icon: MdAccessTime, name: "Time" },
		{ icon: MdLocationOn, name: "Location" },
		{ icon: MdNotifications, name: "Notifications" },
		{ icon: MdFlag, name: "Flag" },
		{ icon: MdThumbUp, name: "Thumb Up" },
		{ icon: MdThumbDown, name: "Thumb Down" },
		{ icon: MdComment, name: "Comment" },
		{ icon: MdShare, name: "Share" },
	],
	antdesign: [
		{ icon: AiOutlineHome, name: "Home" },
		{ icon: AiOutlineUser, name: "User" },
		{ icon: AiOutlineHeart, name: "Heart" },
		{ icon: AiOutlineStar, name: "Star" },
		{ icon: AiOutlineSearch, name: "Search" },
		{ icon: AiOutlineSetting, name: "Setting" },
		{ icon: AiOutlineMail, name: "Mail" },
		{ icon: AiOutlinePhone, name: "Phone" },
		{ icon: AiOutlineCamera, name: "Camera" },
		{ icon: AiOutlineFileText, name: "File Text" },
		{ icon: AiOutlineFolder, name: "Folder" },
		{ icon: AiOutlineDownload, name: "Download" },
		{ icon: AiOutlineUpload, name: "Upload" },
		{ icon: AiOutlineDelete, name: "Delete" },
		{ icon: AiOutlineEdit, name: "Edit" },
		{ icon: AiOutlinePlus, name: "Plus" },
		{ icon: AiOutlineMinus, name: "Minus" },
		{ icon: AiOutlineCheck, name: "Check" },
		{ icon: AiOutlineClose, name: "Close" },
	],
};

export const IconGallery: React.FC<IconGalleryProps> = ({
	size = 24,
	color = "#000",
	showLabels = true,
	category = "all",
}) => {
	const [searchTerm, setSearchTerm] = useState("");

	const getIconsToDisplay = () => {
		if (category === "all") {
			return Object.entries(iconSets).flatMap(([categoryName, icons]) =>
				icons.map((icon) => ({ ...icon, category: categoryName })),
			);
		}
		return iconSets[category]?.map((icon) => ({ ...icon, category })) || [];
	};

	const filteredIcons = getIconsToDisplay().filter(({ name }) =>
		name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const containerStyle: React.CSSProperties = {
		padding: "20px",
		fontFamily: "Arial, sans-serif",
	};

	const searchContainerStyle: React.CSSProperties = {
		marginBottom: "20px",
	};

	const searchInputStyle: React.CSSProperties = {
		width: "100%",
		maxWidth: "400px",
		padding: "10px",
		fontSize: "16px",
		border: "1px solid #ddd",
		borderRadius: "4px",
		marginBottom: "10px",
	};

	const gridStyle: React.CSSProperties = {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
		gap: "20px",
	};

	const iconItemStyle: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "15px",
		border: "1px solid #eee",
		borderRadius: "8px",
		backgroundColor: "#f9f9f9",
		transition: "all 0.2s ease",
		cursor: "pointer",
		background: "none",
		color: "inherit",
		font: "inherit",
	};

	const iconContainerStyle: React.CSSProperties = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: size + 20,
		height: size + 20,
		marginBottom: showLabels ? "8px" : "0",
	};

	const labelStyle: React.CSSProperties = {
		fontSize: "12px",
		textAlign: "center" as const,
		color: "#666",
		marginTop: "4px",
	};

	const categoryStyle: React.CSSProperties = {
		fontSize: "10px",
		color: "#999",
		fontStyle: "italic",
	};

	return (
		<div style={containerStyle}>
			<div style={searchContainerStyle}>
				<input
					type="text"
					placeholder="アイコンを検索..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					style={searchInputStyle}
				/>
				<p style={{ color: "#666", fontSize: "14px" }}>
					{filteredIcons.length}個のアイコンが見つかりました
				</p>
			</div>

			<div style={gridStyle}>
				{filteredIcons.map(
					({ icon: IconComponent, name, category: iconCategory }) => (
						<button
							type="button"
							key={`${iconCategory}-${name}`}
							style={{
								...iconItemStyle,
								border: "1px solid #eee",
								cursor: "pointer",
								background: "#f9f9f9",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = "#f0f0f0";
								e.currentTarget.style.transform = "translateY(-2px)";
								e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = "#f9f9f9";
								e.currentTarget.style.transform = "translateY(0)";
								e.currentTarget.style.boxShadow = "none";
							}}
							onClick={() => {
								// アイコン名をクリップボードにコピー
								navigator.clipboard.writeText(IconComponent.name || name);
							}}
							title={`${name}をクリップボードにコピー`}
						>
							<div style={iconContainerStyle}>
								<IconComponent size={size} color={color} />
							</div>
							{showLabels && (
								<>
									<div style={labelStyle}>{name}</div>
									{category === "all" && (
										<div style={categoryStyle}>{iconCategory}</div>
									)}
								</>
							)}
						</button>
					),
				)}
			</div>

			{filteredIcons.length === 0 && (
				<div style={{ textAlign: "center", color: "#999", marginTop: "40px" }}>
					検索条件に一致するアイコンが見つかりませんでした
				</div>
			)}
		</div>
	);
};

export default IconGallery;
