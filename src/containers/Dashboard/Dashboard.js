import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import "./Dashboard.scss";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard(props) {
	const location = useLocation();
	const pathName = location.pathname;

	return (
		<>
			<Layout>
				<Header className="site-layout-background">
					<Link to="/">BeeShop</Link>
				</Header>
				<Content>
					<Layout
						className="site-layout-background"
						style={{ padding: "24px 0" }}
					>
						<Sider className="site-layout-background" width={200}>
							<Menu
								mode="inline"
								defaultSelectedKeys={pathName}
								defaultOpenKeys={["sub1"]}
								style={{ height: "100%" }}
							>
								<SubMenu
									key="sub1"
									icon={<PieChartOutlined />}
									title="Sản phẩm"
								>
									<Menu.Item key="1">
										<Link to="/dashboard/addProduct">Thêm sản phẩm</Link>
									</Menu.Item>
									<Menu.Item key="2">
										<Link to="/dashboard/removeProduct">Xoá sản phẩm</Link>
									</Menu.Item>
									<Menu.Item key="5">
										<Link to="/dashboard/removeComment">Bình luận</Link>
									</Menu.Item>
								</SubMenu>
								{/* <SubMenu key="sub2" icon={<UserOutlined />} title="User">
								</SubMenu> */}
							</Menu>
						</Sider>
						<Content style={{ padding: "0 24px", minHeight: 280 }}>
							{props.children}
						</Content>
					</Layout>
				</Content>
			</Layout>
		</>
	);
}

export default React.memo(Dashboard);
