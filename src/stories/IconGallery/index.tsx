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
		{ icon: FaHome, name: "Home", importName: "FaHome" },
		{ icon: FaUser, name: "User", importName: "FaUser" },
		{ icon: FaHeart, name: "Heart", importName: "FaHeart" },
		{ icon: FaStar, name: "Star", importName: "FaStar" },
		{ icon: FaSearch, name: "Search", importName: "FaSearch" },
		{ icon: FaCog, name: "Settings", importName: "FaCog" },
		{ icon: FaEnvelope, name: "Email", importName: "FaEnvelope" },
		{ icon: FaPhone, name: "Phone", importName: "FaPhone" },
		{ icon: FaCamera, name: "Camera", importName: "FaCamera" },
		{ icon: FaMusic, name: "Music", importName: "FaMusic" },
		{ icon: FaVideo, name: "Video", importName: "FaVideo" },
		{ icon: FaFile, name: "File", importName: "FaFile" },
		{ icon: FaFolder, name: "Folder", importName: "FaFolder" },
		{ icon: FaDownload, name: "Download", importName: "FaDownload" },
		{ icon: FaUpload, name: "Upload", importName: "FaUpload" },
		{ icon: FaTrash, name: "Trash", importName: "FaTrash" },
		{ icon: FaEdit, name: "Edit", importName: "FaEdit" },
		{ icon: FaPlus, name: "Plus", importName: "FaPlus" },
		{ icon: FaMinus, name: "Minus", importName: "FaMinus" },
		{ icon: FaCheck, name: "Check", importName: "FaCheck" },
		{ icon: FaTimes, name: "Times", importName: "FaTimes" },
		{ icon: FaArrowRight, name: "Arrow Right", importName: "FaArrowRight" },
		{ icon: FaArrowLeft, name: "Arrow Left", importName: "FaArrowLeft" },
		{ icon: FaArrowUp, name: "Arrow Up", importName: "FaArrowUp" },
		{ icon: FaArrowDown, name: "Arrow Down", importName: "FaArrowDown" },
		{
			icon: FaShoppingCart,
			name: "Shopping Cart",
			importName: "FaShoppingCart",
		},
		{ icon: FaGift, name: "Gift", importName: "FaGift" },
		{ icon: FaCalendar, name: "Calendar", importName: "FaCalendar" },
		{ icon: FaClock, name: "Clock", importName: "FaClock" },
		{ icon: FaMap, name: "Map", importName: "FaMap" },
		{ icon: FaGamepad, name: "Gamepad", importName: "FaGamepad" },
		{ icon: FaBell, name: "Bell", importName: "FaBell" },
		{ icon: FaFlag, name: "Flag", importName: "FaFlag" },
		{ icon: FaThumbsUp, name: "Thumbs Up", importName: "FaThumbsUp" },
		{ icon: FaThumbsDown, name: "Thumbs Down", importName: "FaThumbsDown" },
		{ icon: FaComments, name: "Comments", importName: "FaComments" },
		{ icon: FaShare, name: "Share", importName: "FaShare" },
		{ icon: FaBuilding, name: "Building", importName: "FaBuilding" },
		{ icon: FaCar, name: "Car", importName: "FaCar" },
		{ icon: FaPlane, name: "Plane", importName: "FaPlane" },
		{ icon: FaTrain, name: "Train", importName: "FaTrain" },
		{ icon: FaShip, name: "Ship", importName: "FaShip" },
		{ icon: FaBicycle, name: "Bicycle", importName: "FaBicycle" },
		{ icon: FaLaptop, name: "Laptop", importName: "FaLaptop" },
		{ icon: FaMobile, name: "Mobile", importName: "FaMobile" },
		{ icon: FaDesktop, name: "Desktop", importName: "FaDesktop" },
		{ icon: FaHeadphones, name: "Headphones", importName: "FaHeadphones" },
		{ icon: FaMicrophone, name: "Microphone", importName: "FaMicrophone" },
		{ icon: FaWifi, name: "Wifi", importName: "FaWifi" },
		{ icon: FaFacebook, name: "Facebook", importName: "FaFacebook" },
		{ icon: FaTwitter, name: "Twitter", importName: "FaTwitter" },
		{ icon: FaInstagram, name: "Instagram", importName: "FaInstagram" },
		{ icon: FaLinkedin, name: "LinkedIn", importName: "FaLinkedin" },
		{ icon: FaGithub, name: "GitHub", importName: "FaGithub" },
		{ icon: FaYoutube, name: "YouTube", importName: "FaYoutube" },
	],
	material: [
		{ icon: MdHome, name: "Home", importName: "MdHome" },
		{ icon: MdPerson, name: "Person", importName: "MdPerson" },
		{ icon: MdFavorite, name: "Favorite", importName: "MdFavorite" },
		{ icon: MdStar, name: "Star", importName: "MdStar" },
		{ icon: MdSearch, name: "Search", importName: "MdSearch" },
		{ icon: MdSettings, name: "Settings", importName: "MdSettings" },
		{ icon: MdEmail, name: "Email", importName: "MdEmail" },
		{ icon: MdPhone, name: "Phone", importName: "MdPhone" },
		{ icon: MdCamera, name: "Camera", importName: "MdCamera" },
		{ icon: MdMusicNote, name: "Music", importName: "MdMusicNote" },
		{ icon: MdVideocam, name: "Video", importName: "MdVideocam" },
		{ icon: MdDescription, name: "Document", importName: "MdDescription" },
		{ icon: MdFolder, name: "Folder", importName: "MdFolder" },
		{ icon: MdFileDownload, name: "Download", importName: "MdFileDownload" },
		{ icon: MdFileUpload, name: "Upload", importName: "MdFileUpload" },
		{ icon: MdDelete, name: "Delete", importName: "MdDelete" },
		{ icon: MdEdit, name: "Edit", importName: "MdEdit" },
		{ icon: MdAdd, name: "Add", importName: "MdAdd" },
		{ icon: MdRemove, name: "Remove", importName: "MdRemove" },
		{ icon: MdCheck, name: "Check", importName: "MdCheck" },
		{ icon: MdClose, name: "Close", importName: "MdClose" },
		{
			icon: MdArrowForward,
			name: "Arrow Forward",
			importName: "MdArrowForward",
		},
		{ icon: MdArrowBack, name: "Arrow Back", importName: "MdArrowBack" },
		{ icon: MdArrowUpward, name: "Arrow Up", importName: "MdArrowUpward" },
		{
			icon: MdArrowDownward,
			name: "Arrow Down",
			importName: "MdArrowDownward",
		},
		{
			icon: MdShoppingCart,
			name: "Shopping Cart",
			importName: "MdShoppingCart",
		},
		{ icon: MdCalendarToday, name: "Calendar", importName: "MdCalendarToday" },
		{ icon: MdAccessTime, name: "Time", importName: "MdAccessTime" },
		{ icon: MdLocationOn, name: "Location", importName: "MdLocationOn" },
		{
			icon: MdNotifications,
			name: "Notifications",
			importName: "MdNotifications",
		},
		{ icon: MdFlag, name: "Flag", importName: "MdFlag" },
		{ icon: MdThumbUp, name: "Thumb Up", importName: "MdThumbUp" },
		{ icon: MdThumbDown, name: "Thumb Down", importName: "MdThumbDown" },
		{ icon: MdComment, name: "Comment", importName: "MdComment" },
		{ icon: MdShare, name: "Share", importName: "MdShare" },
	],
	antdesign: [
		{ icon: AiOutlineHome, name: "Home", importName: "AiOutlineHome" },
		{ icon: AiOutlineUser, name: "User", importName: "AiOutlineUser" },
		{ icon: AiOutlineHeart, name: "Heart", importName: "AiOutlineHeart" },
		{ icon: AiOutlineStar, name: "Star", importName: "AiOutlineStar" },
		{ icon: AiOutlineSearch, name: "Search", importName: "AiOutlineSearch" },
		{ icon: AiOutlineSetting, name: "Setting", importName: "AiOutlineSetting" },
		{ icon: AiOutlineMail, name: "Mail", importName: "AiOutlineMail" },
		{ icon: AiOutlinePhone, name: "Phone", importName: "AiOutlinePhone" },
		{ icon: AiOutlineCamera, name: "Camera", importName: "AiOutlineCamera" },
		{
			icon: AiOutlineFileText,
			name: "File Text",
			importName: "AiOutlineFileText",
		},
		{ icon: AiOutlineFolder, name: "Folder", importName: "AiOutlineFolder" },
		{
			icon: AiOutlineDownload,
			name: "Download",
			importName: "AiOutlineDownload",
		},
		{ icon: AiOutlineUpload, name: "Upload", importName: "AiOutlineUpload" },
		{ icon: AiOutlineDelete, name: "Delete", importName: "AiOutlineDelete" },
		{ icon: AiOutlineEdit, name: "Edit", importName: "AiOutlineEdit" },
		{ icon: AiOutlinePlus, name: "Plus", importName: "AiOutlinePlus" },
		{ icon: AiOutlineMinus, name: "Minus", importName: "AiOutlineMinus" },
		{ icon: AiOutlineCheck, name: "Check", importName: "AiOutlineCheck" },
		{ icon: AiOutlineClose, name: "Close", importName: "AiOutlineClose" },
	],
};

export const IconGallery: React.FC<IconGalleryProps> = ({
	size = 24,
	color = "#000",
	showLabels = true,
	category = "all",
}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [copyStatus, setCopyStatus] = useState<string>("");

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

	const handleCopyToClipboard = async (importName: string) => {
		try {
			// Check if clipboard API is available
			if (!navigator.clipboard) {
				throw new Error("クリップボードAPIが利用できません");
			}

			await navigator.clipboard.writeText(importName);
			setCopyStatus(`${importName} をコピーしました！`);

			// Clear success message after 3 seconds
			setTimeout(() => {
				setCopyStatus("");
			}, 3000);
		} catch (error) {
			setCopyStatus("コピーに失敗しました");
			console.error("Clipboard copy failed:", error);

			// Clear error message after 3 seconds
			setTimeout(() => {
				setCopyStatus("");
			}, 3000);
		}
	};

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

	const copyStatusStyle: React.CSSProperties = {
		padding: "10px",
		backgroundColor: copyStatus.includes("失敗") ? "#f8d7da" : "#d4edda",
		color: copyStatus.includes("失敗") ? "#721c24" : "#155724",
		border: `1px solid ${copyStatus.includes("失敗") ? "#f5c6cb" : "#c3e6cb"}`,
		borderRadius: "4px",
		marginBottom: "10px",
		fontSize: "14px",
		fontWeight: "500",
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
				{copyStatus && <div style={copyStatusStyle}>{copyStatus}</div>}
				<p style={{ color: "#666", fontSize: "14px" }}>
					{filteredIcons.length}個のアイコンが見つかりました
				</p>
			</div>

			<div style={gridStyle}>
				{filteredIcons.map(
					({
						icon: IconComponent,
						name,
						importName,
						category: iconCategory,
					}) => (
						<button
							type="button"
							key={`${iconCategory}-${importName}`}
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
							onClick={() => handleCopyToClipboard(importName)}
							title={`${importName} をクリップボードにコピー`}
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
