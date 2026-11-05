var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var e_1, _a;
var Yr = Object.create;
var Ke = Object.defineProperty, _r = Object.defineProperties, e0 = Object.getOwnPropertyDescriptor, u0 = Object.getOwnPropertyDescriptors, t0 = Object.getOwnPropertyNames, Ft = Object.getOwnPropertySymbols, r0 = Object.getPrototypeOf, Gt = Object.prototype.hasOwnProperty, n0 = Object.prototype.propertyIsEnumerable;
var Vt = function (e, u, t) { return u in e ? Ke(e, u, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[u] = t; }, de = function (e, u) {
    var e_2, _a;
    for (var t in u || (u = {}))
        Gt.call(u, t) && Vt(e, t, u[t]);
    if (Ft)
        try {
            for (var _b = __values(Ft(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                n0.call(u, t) && Vt(e, t, u[t]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return e;
}, ke = function (e, u) { return _r(e, u0(u)); };
var i0 = function (e, u) { return function () { return (u || e((u = { exports: {} }).exports, u), u.exports); }; }, Vu = function (e, u) { for (var t in u)
    Ke(e, t, { get: u[t], enumerable: !0 }); }, jt = function (e, u, t, r) {
    var e_3, _a;
    if (u && typeof u == "object" || typeof u == "function") {
        var _loop_1 = function (n) {
            !Gt.call(e, n) && n !== t && Ke(e, n, { get: function () { return u[n]; }, enumerable: !(r = e0(u, n)) || r.enumerable });
        };
        try {
            for (var _b = __values(t0(u)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var n = _c.value;
                _loop_1(n);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return e;
};
var Ne = function (e, u, t) { return (t = e != null ? Yr(r0(e)) : {}, jt(u || !e || !e.__esModule ? Ke(t, "default", { value: e, enumerable: !0 }) : t, e)); }, a0 = function (e) { return jt(Ke({}, "__esModule", { value: !0 }), e); };
var Te = i0(function (sa, xr) { xr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var Ln = {};
Vu(Ln, { default: function () { return In; } });
module.exports = a0(Ln);
var ou = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (e) { return e.charCodeAt(0); }));
var lu = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (e) { return e.charCodeAt(0); }));
var Gu, s0 = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Me = (Gu = String.fromCodePoint) !== null && Gu !== void 0 ? Gu : function (e) { var u = ""; return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u; };
function ju(e) { var u; return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = s0.get(e)) !== null && u !== void 0 ? u : e; }
var X;
(function (e) { e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z"; })(X || (X = {}));
var c0 = 32, Se;
(function (e) { e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE"; })(Se || (Se = {}));
function zu(e) { return e >= X.ZERO && e <= X.NINE; }
function o0(e) { return e >= X.UPPER_A && e <= X.UPPER_F || e >= X.LOWER_A && e <= X.LOWER_F; }
function l0(e) { return e >= X.UPPER_A && e <= X.UPPER_Z || e >= X.LOWER_A && e <= X.LOWER_Z || zu(e); }
function f0(e) { return e === X.EQUALS || l0(e); }
var Z;
(function (e) { e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity"; })(Z || (Z = {}));
var se;
(function (e) { e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute"; })(se || (se = {}));
var Oe = (function () {
    function Oe(u, t, r) {
        this.decodeTree = u, this.emitCodePoint = t, this.errors = r, this.state = Z.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = se.Strict;
    }
    Oe.prototype.startEntity = function (u) { this.decodeMode = u, this.state = Z.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Oe.prototype.write = function (u, t) { switch (this.state) {
        case Z.EntityStart: return u.charCodeAt(t) === X.NUM ? (this.state = Z.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = Z.NamedEntity, this.stateNamedEntity(u, t));
        case Z.NumericStart: return this.stateNumericStart(u, t);
        case Z.NumericDecimal: return this.stateNumericDecimal(u, t);
        case Z.NumericHex: return this.stateNumericHex(u, t);
        case Z.NamedEntity: return this.stateNamedEntity(u, t);
    } };
    Oe.prototype.stateNumericStart = function (u, t) { return t >= u.length ? -1 : (u.charCodeAt(t) | c0) === X.LOWER_X ? (this.state = Z.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = Z.NumericDecimal, this.stateNumericDecimal(u, t)); };
    Oe.prototype.addToNumericResult = function (u, t, r, n) { if (t !== r) {
        var i = r - t;
        this.result = this.result * Math.pow(n, i) + parseInt(u.substr(t, i), n), this.consumed += i;
    } };
    Oe.prototype.stateNumericHex = function (u, t) { var r = t; for (; t < u.length;) {
        var n = u.charCodeAt(t);
        if (zu(n) || o0(n))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 16), this.emitNumericEntity(n, 3);
    } return this.addToNumericResult(u, r, t, 16), -1; };
    Oe.prototype.stateNumericDecimal = function (u, t) { var r = t; for (; t < u.length;) {
        var n = u.charCodeAt(t);
        if (zu(n))
            t += 1;
        else
            return this.addToNumericResult(u, r, t, 10), this.emitNumericEntity(n, 2);
    } return this.addToNumericResult(u, r, t, 10), -1; };
    Oe.prototype.emitNumericEntity = function (u, t) { var r; if (this.consumed <= t)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (u === X.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === se.Strict)
        return 0; return this.emitCodePoint(ju(this.result), this.consumed), this.errors && (u !== X.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Oe.prototype.stateNamedEntity = function (u, t) { var r = this.decodeTree, n = r[this.treeIndex], i = (n & Se.VALUE_LENGTH) >> 14; for (; t < u.length; t++, this.excess++) {
        var a = u.charCodeAt(t);
        if (this.treeIndex = d0(r, n, this.treeIndex + Math.max(1, i), a), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === se.Attribute && (i === 0 || f0(a)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (n = r[this.treeIndex], i = (n & Se.VALUE_LENGTH) >> 14, i !== 0) {
            if (a === X.SEMI)
                return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
            this.decodeMode !== se.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Oe.prototype.emitNotTerminatedNamedEntity = function () { var u; var _a = this, t = _a.result, r = _a.decodeTree, n = (r[t] & Se.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(t, n, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed; };
    Oe.prototype.emitNamedEntityData = function (u, t, r) { var n = this.decodeTree; return this.emitCodePoint(t === 1 ? n[u] & ~Se.VALUE_LENGTH : n[u + 1], r), t === 3 && this.emitCodePoint(n[u + 2], r), r; };
    Oe.prototype.end = function () { var u; switch (this.state) {
        case Z.NamedEntity: return this.result !== 0 && (this.decodeMode !== se.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case Z.NumericDecimal: return this.emitNumericEntity(0, 2);
        case Z.NumericHex: return this.emitNumericEntity(0, 3);
        case Z.NumericStart: return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case Z.EntityStart: return 0;
    } };
    return Oe;
}());
function zt(e) { var u = "", t = new Oe(e, function (r) { return u += Me(r); }); return function (n, i) { var a = 0, o = 0; for (; (o = n.indexOf("&", o)) >= 0;) {
    u += n.slice(a, o), t.startEntity(i);
    var b = t.write(n, o + 1);
    if (b < 0) {
        a = o + t.end();
        break;
    }
    a = o + b, o = b === 0 ? a + 1 : a;
} var h = u + n.slice(a); return u = "", h; }; }
function d0(e, u, t, r) { var n = (u & Se.BRANCH_LENGTH) >> 7, i = u & Se.JUMP_TABLE; if (n === 0)
    return i !== 0 && r === i ? t : -1; if (i) {
    var h = r - i;
    return h < 0 || h >= n ? -1 : e[t + h] - 1;
} var a = t, o = a + n - 1; for (; a <= o;) {
    var h = a + o >>> 1, b = e[h];
    if (b < r)
        a = h + 1;
    else if (b > r)
        o = h - 1;
    else
        return e[h + n];
} return -1; }
var Vn = zt(ou), Gn = zt(lu);
var N;
(function (e) { e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(N || (N = {}));
var x;
(function (e) { e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.BeforeSpecialT = 23] = "BeforeSpecialT", e[e.SpecialStartSequence = 24] = "SpecialStartSequence", e[e.InSpecialTag = 25] = "InSpecialTag", e[e.InEntity = 26] = "InEntity"; })(x || (x = {}));
function me(e) { return e === N.Space || e === N.NewLine || e === N.Tab || e === N.FormFeed || e === N.CarriageReturn; }
function fu(e) { return e === N.Slash || e === N.Gt || me(e); }
function h0(e) { return e >= N.LowerA && e <= N.LowerZ || e >= N.UpperA && e <= N.UpperZ; }
var oe;
(function (e) { e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double"; })(oe || (oe = {}));
var _ = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Be = (function () {
    function Be(_a, r) {
        var _b = _a.xmlMode, u = _b === void 0 ? !1 : _b, _c = _a.decodeEntities, t = _c === void 0 ? !0 : _c;
        var _this = this;
        this.cbs = r, this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = x.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = u, this.decodeEntities = t, this.entityDecoder = new Oe(u ? lu : ou, function (n, i) { return _this.emitCodePoint(n, i); });
    }
    Be.prototype.reset = function () { this.state = x.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = x.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Be.prototype.write = function (u) { this.offset += this.buffer.length, this.buffer = u, this.parse(); };
    Be.prototype.end = function () { this.running && this.finish(); };
    Be.prototype.pause = function () { this.running = !1; };
    Be.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Be.prototype.stateText = function (u) { u === N.Lt || !this.decodeEntities && this.fastForwardTo(N.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = x.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && u === N.Amp && this.startEntity(); };
    Be.prototype.stateSpecialStartSequence = function (u) { var t = this.sequenceIndex === this.currentSequence.length; if (!(t ? fu(u) : (u | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!t) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = x.InTagName, this.stateInTagName(u); };
    Be.prototype.stateInSpecialTag = function (u) { if (this.sequenceIndex === this.currentSequence.length) {
        if (u === N.Gt || me(u)) {
            var t = this.index - this.currentSequence.length;
            if (this.sectionStart < t) {
                var r = this.index;
                this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = t + 2, this.stateInClosingTagName(u);
            return;
        }
        this.sequenceIndex = 0;
    } (u | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === _.TitleEnd ? this.decodeEntities && u === N.Amp && this.startEntity() : this.fastForwardTo(N.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(u === N.Lt); };
    Be.prototype.stateCDATASequence = function (u) { u === _.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === _.Cdata.length && (this.state = x.InCommentLike, this.currentSequence = _.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = x.InDeclaration, this.stateInDeclaration(u)); };
    Be.prototype.fastForwardTo = function (u) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === u)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Be.prototype.stateInCommentLike = function (u) { u === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === _.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = x.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : u !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Be.prototype.isTagStartChar = function (u) { return this.xmlMode ? !fu(u) : h0(u); };
    Be.prototype.startSpecial = function (u, t) { this.isSpecial = !0, this.currentSequence = u, this.sequenceIndex = t, this.state = x.SpecialStartSequence; };
    Be.prototype.stateBeforeTagName = function (u) { if (u === N.ExclamationMark)
        this.state = x.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (u === N.Questionmark)
        this.state = x.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(u)) {
        var t = u | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = x.InTagName : t === _.ScriptEnd[2] ? this.state = x.BeforeSpecialS : t === _.TitleEnd[2] ? this.state = x.BeforeSpecialT : this.state = x.InTagName;
    }
    else
        u === N.Slash ? this.state = x.BeforeClosingTagName : (this.state = x.Text, this.stateText(u)); };
    Be.prototype.stateInTagName = function (u) { fu(u) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Be.prototype.stateBeforeClosingTagName = function (u) { me(u) || (u === N.Gt ? this.state = x.Text : (this.state = this.isTagStartChar(u) ? x.InClosingTagName : x.InSpecialComment, this.sectionStart = this.index)); };
    Be.prototype.stateInClosingTagName = function (u) { (u === N.Gt || me(u)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = x.AfterClosingTagName, this.stateAfterClosingTagName(u)); };
    Be.prototype.stateAfterClosingTagName = function (u) { (u === N.Gt || this.fastForwardTo(N.Gt)) && (this.state = x.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateBeforeAttributeName = function (u) { u === N.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = x.InSpecialTag, this.sequenceIndex = 0) : this.state = x.Text, this.sectionStart = this.index + 1) : u === N.Slash ? this.state = x.InSelfClosingTag : me(u) || (this.state = x.InAttributeName, this.sectionStart = this.index); };
    Be.prototype.stateInSelfClosingTag = function (u) { u === N.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = x.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : me(u) || (this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(u)); };
    Be.prototype.stateInAttributeName = function (u) { (u === N.Eq || fu(u)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = x.AfterAttributeName, this.stateAfterAttributeName(u)); };
    Be.prototype.stateAfterAttributeName = function (u) { u === N.Eq ? this.state = x.BeforeAttributeValue : u === N.Slash || u === N.Gt ? (this.cbs.onattribend(oe.NoValue, this.sectionStart), this.sectionStart = -1, this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(u)) : me(u) || (this.cbs.onattribend(oe.NoValue, this.sectionStart), this.state = x.InAttributeName, this.sectionStart = this.index); };
    Be.prototype.stateBeforeAttributeValue = function (u) { u === N.DoubleQuote ? (this.state = x.InAttributeValueDq, this.sectionStart = this.index + 1) : u === N.SingleQuote ? (this.state = x.InAttributeValueSq, this.sectionStart = this.index + 1) : me(u) || (this.sectionStart = this.index, this.state = x.InAttributeValueNq, this.stateInAttributeValueNoQuotes(u)); };
    Be.prototype.handleInAttributeValue = function (u, t) { u === t || !this.decodeEntities && this.fastForwardTo(t) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === N.DoubleQuote ? oe.Double : oe.Single, this.index + 1), this.state = x.BeforeAttributeName) : this.decodeEntities && u === N.Amp && this.startEntity(); };
    Be.prototype.stateInAttributeValueDoubleQuotes = function (u) { this.handleInAttributeValue(u, N.DoubleQuote); };
    Be.prototype.stateInAttributeValueSingleQuotes = function (u) { this.handleInAttributeValue(u, N.SingleQuote); };
    Be.prototype.stateInAttributeValueNoQuotes = function (u) { me(u) || u === N.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(oe.Unquoted, this.index), this.state = x.BeforeAttributeName, this.stateBeforeAttributeName(u)) : this.decodeEntities && u === N.Amp && this.startEntity(); };
    Be.prototype.stateBeforeDeclaration = function (u) { u === N.OpeningSquareBracket ? (this.state = x.CDATASequence, this.sequenceIndex = 0) : this.state = u === N.Dash ? x.BeforeComment : x.InDeclaration; };
    Be.prototype.stateInDeclaration = function (u) { (u === N.Gt || this.fastForwardTo(N.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateInProcessingInstruction = function (u) { (u === N.Gt || this.fastForwardTo(N.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = x.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateBeforeComment = function (u) { u === N.Dash ? (this.state = x.InCommentLike, this.currentSequence = _.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = x.InDeclaration; };
    Be.prototype.stateInSpecialComment = function (u) { (u === N.Gt || this.fastForwardTo(N.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = x.Text, this.sectionStart = this.index + 1); };
    Be.prototype.stateBeforeSpecialS = function (u) { var t = u | 32; t === _.ScriptEnd[3] ? this.startSpecial(_.ScriptEnd, 4) : t === _.StyleEnd[3] ? this.startSpecial(_.StyleEnd, 4) : (this.state = x.InTagName, this.stateInTagName(u)); };
    Be.prototype.stateBeforeSpecialT = function (u) { var t = u | 32; t === _.TitleEnd[3] ? this.startSpecial(_.TitleEnd, 4) : t === _.TextareaEnd[3] ? this.startSpecial(_.TextareaEnd, 4) : (this.state = x.InTagName, this.stateInTagName(u)); };
    Be.prototype.startEntity = function () { this.baseState = this.state, this.state = x.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? se.Strict : this.baseState === x.Text || this.baseState === x.InSpecialTag ? se.Legacy : se.Attribute); };
    Be.prototype.stateInEntity = function () { var u = this.entityDecoder.write(this.buffer, this.index - this.offset); u >= 0 ? (this.state = this.baseState, u === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Be.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === x.Text || this.state === x.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === x.InAttributeValueDq || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Be.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Be.prototype.parse = function () { for (; this.shouldContinue();) {
        var u = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case x.Text: {
                this.stateText(u);
                break;
            }
            case x.SpecialStartSequence: {
                this.stateSpecialStartSequence(u);
                break;
            }
            case x.InSpecialTag: {
                this.stateInSpecialTag(u);
                break;
            }
            case x.CDATASequence: {
                this.stateCDATASequence(u);
                break;
            }
            case x.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(u);
                break;
            }
            case x.InAttributeName: {
                this.stateInAttributeName(u);
                break;
            }
            case x.InCommentLike: {
                this.stateInCommentLike(u);
                break;
            }
            case x.InSpecialComment: {
                this.stateInSpecialComment(u);
                break;
            }
            case x.BeforeAttributeName: {
                this.stateBeforeAttributeName(u);
                break;
            }
            case x.InTagName: {
                this.stateInTagName(u);
                break;
            }
            case x.InClosingTagName: {
                this.stateInClosingTagName(u);
                break;
            }
            case x.BeforeTagName: {
                this.stateBeforeTagName(u);
                break;
            }
            case x.AfterAttributeName: {
                this.stateAfterAttributeName(u);
                break;
            }
            case x.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(u);
                break;
            }
            case x.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(u);
                break;
            }
            case x.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(u);
                break;
            }
            case x.AfterClosingTagName: {
                this.stateAfterClosingTagName(u);
                break;
            }
            case x.BeforeSpecialS: {
                this.stateBeforeSpecialS(u);
                break;
            }
            case x.BeforeSpecialT: {
                this.stateBeforeSpecialT(u);
                break;
            }
            case x.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(u);
                break;
            }
            case x.InSelfClosingTag: {
                this.stateInSelfClosingTag(u);
                break;
            }
            case x.InDeclaration: {
                this.stateInDeclaration(u);
                break;
            }
            case x.BeforeDeclaration: {
                this.stateBeforeDeclaration(u);
                break;
            }
            case x.BeforeComment: {
                this.stateBeforeComment(u);
                break;
            }
            case x.InProcessingInstruction: {
                this.stateInProcessingInstruction(u);
                break;
            }
            case x.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Be.prototype.finish = function () { this.state === x.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Be.prototype.handleTrailingData = function () { var u = this.buffer.length + this.offset; this.sectionStart >= u || (this.state === x.InCommentLike ? this.currentSequence === _.CdataEnd ? this.cbs.oncdata(this.sectionStart, u, 0) : this.cbs.oncomment(this.sectionStart, u, 0) : this.state === x.InTagName || this.state === x.BeforeAttributeName || this.state === x.BeforeAttributeValue || this.state === x.AfterAttributeName || this.state === x.InAttributeName || this.state === x.InAttributeValueSq || this.state === x.InAttributeValueDq || this.state === x.InAttributeValueNq || this.state === x.InClosingTagName || this.cbs.ontext(this.sectionStart, u)); };
    Be.prototype.emitCodePoint = function (u, t) { this.baseState !== x.Text && this.baseState !== x.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.onattribentity(u)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + t, this.index = this.sectionStart - 1, this.cbs.ontextentity(u, this.sectionStart)); };
    return Be;
}());
var He = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), R = new Set(["p"]), $t = new Set(["thead", "tbody"]), Wt = new Set(["dd", "dt"]), Kt = new Set(["rt", "rp"]), b0 = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", R], ["h1", R], ["h2", R], ["h3", R], ["h4", R], ["h5", R], ["h6", R], ["select", He], ["input", He], ["output", He], ["button", He], ["datalist", He], ["textarea", He], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Wt], ["dt", Wt], ["address", R], ["article", R], ["aside", R], ["blockquote", R], ["details", R], ["div", R], ["dl", R], ["fieldset", R], ["figcaption", R], ["figure", R], ["footer", R], ["form", R], ["header", R], ["hr", R], ["main", R], ["nav", R], ["ol", R], ["pre", R], ["section", R], ["table", R], ["ul", R], ["rt", Kt], ["rp", Kt], ["tbody", $t], ["tfoot", $t]]), p0 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Qt = new Set(["math", "svg"]), Zt = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), g0 = /\s|\//, Qe = (function () {
    function Qe(u, t) {
        if (t === void 0) { t = {}; }
        var r, n, i, a, o, h;
        this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = u != null ? u : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (n = t.lowerCaseAttributeNames) !== null && n !== void 0 ? n : this.htmlMode, this.recognizeSelfClosing = (i = t.recognizeSelfClosing) !== null && i !== void 0 ? i : !this.htmlMode, this.tokenizer = new ((a = t.Tokenizer) !== null && a !== void 0 ? a : Be)(this.options, this), this.foreignContext = [!this.htmlMode], (h = (o = this.cbs).onparserinit) === null || h === void 0 || h.call(o, this);
    }
    Qe.prototype.ontext = function (u, t) { var r, n; var i = this.getSlice(u, t); this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, i), this.startIndex = t; };
    Qe.prototype.ontextentity = function (u, t) { var r, n; this.endIndex = t - 1, (n = (r = this.cbs).ontext) === null || n === void 0 || n.call(r, Me(u)), this.startIndex = t; };
    Qe.prototype.isVoidElement = function (u) { return this.htmlMode && p0.has(u); };
    Qe.prototype.onopentagname = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Qe.prototype.emitOpenTag = function (u) { var t, r, n, i; this.openTagStart = this.startIndex, this.tagname = u; var a = this.htmlMode && b0.get(u); if (a)
        for (; this.stack.length > 0 && a.has(this.stack[0]);) {
            var o = this.stack.shift();
            (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, o, !0);
        } this.isVoidElement(u) || (this.stack.unshift(u), this.htmlMode && (Qt.has(u) ? this.foreignContext.unshift(!0) : Zt.has(u) && this.foreignContext.unshift(!1))), (i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, u), this.cbs.onopentag && (this.attribs = {}); };
    Qe.prototype.endOpenTag = function (u) { var t, r; this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, u), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Qe.prototype.onopentagend = function (u) { this.endIndex = u, this.endOpenTag(!1), this.startIndex = u + 1; };
    Qe.prototype.onclosetag = function (u, t) { var r, n, i, a, o, h, b, v; this.endIndex = t; var D = this.getSlice(u, t); if (this.lowerCaseTagNames && (D = D.toLowerCase()), this.htmlMode && (Qt.has(D) || Zt.has(D)) && this.foreignContext.shift(), this.isVoidElement(D))
        this.htmlMode && D === "br" && ((a = (i = this.cbs).onopentagname) === null || a === void 0 || a.call(i, "br"), (h = (o = this.cbs).onopentag) === null || h === void 0 || h.call(o, "br", {}, !0), (v = (b = this.cbs).onclosetag) === null || v === void 0 || v.call(b, "br", !1));
    else {
        var A = this.stack.indexOf(D);
        if (A !== -1)
            for (var E = 0; E <= A; E++) {
                var q = this.stack.shift();
                (n = (r = this.cbs).onclosetag) === null || n === void 0 || n.call(r, q, E !== A);
            }
        else
            this.htmlMode && D === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = t + 1; };
    Qe.prototype.onselfclosingtag = function (u) { this.endIndex = u, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = u + 1) : this.onopentagend(u); };
    Qe.prototype.closeCurrentTag = function (u) { var t, r; var n = this.tagname; this.endOpenTag(u), this.stack[0] === n && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, n, !u), this.stack.shift()); };
    Qe.prototype.onattribname = function (u, t) { this.startIndex = u; var r = this.getSlice(u, t); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Qe.prototype.onattribdata = function (u, t) { this.attribvalue += this.getSlice(u, t); };
    Qe.prototype.onattribentity = function (u) { this.attribvalue += Me(u); };
    Qe.prototype.onattribend = function (u, t) { var r, n; this.endIndex = t, (n = (r = this.cbs).onattribute) === null || n === void 0 || n.call(r, this.attribname, this.attribvalue, u === oe.Double ? '"' : u === oe.Single ? "'" : u === oe.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Qe.prototype.getInstructionName = function (u) { var t = u.search(g0), r = t < 0 ? u : u.substr(0, t); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Qe.prototype.ondeclaration = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(r));
    } this.startIndex = t + 1; };
    Qe.prototype.onprocessinginstruction = function (u, t) { this.endIndex = t; var r = this.getSlice(u, t); if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(r));
    } this.startIndex = t + 1; };
    Qe.prototype.oncomment = function (u, t, r) { var n, i, a, o; this.endIndex = t, (i = (n = this.cbs).oncomment) === null || i === void 0 || i.call(n, this.getSlice(u, t - r)), (o = (a = this.cbs).oncommentend) === null || o === void 0 || o.call(a), this.startIndex = t + 1; };
    Qe.prototype.oncdata = function (u, t, r) { var n, i, a, o, h, b, v, D, A, E; this.endIndex = t; var q = this.getSlice(u, t - r); !this.htmlMode || this.options.recognizeCDATA ? ((i = (n = this.cbs).oncdatastart) === null || i === void 0 || i.call(n), (o = (a = this.cbs).ontext) === null || o === void 0 || o.call(a, q), (b = (h = this.cbs).oncdataend) === null || b === void 0 || b.call(h)) : ((D = (v = this.cbs).oncomment) === null || D === void 0 || D.call(v, "[CDATA[".concat(q, "]]")), (E = (A = this.cbs).oncommentend) === null || E === void 0 || E.call(A)), this.startIndex = t + 1; };
    Qe.prototype.onend = function () { var u, t; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (t = (u = this.cbs).onend) === null || t === void 0 || t.call(u); };
    Qe.prototype.reset = function () { var u, t, r, n; (t = (u = this.cbs).onreset) === null || t === void 0 || t.call(u), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (r = this.cbs).onparserinit) === null || n === void 0 || n.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Qe.prototype.parseComplete = function (u) { this.reset(), this.end(u); };
    Qe.prototype.getSlice = function (u, t) { for (; u - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(u - this.bufferOffset, t - this.bufferOffset); for (; t - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset); return r; };
    Qe.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Qe.prototype.write = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
    } this.buffers.push(u), this.tokenizer.running && (this.tokenizer.write(u), this.writeIndex++); };
    Qe.prototype.end = function (u) { var t, r; if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
    } u && this.write(u), this.ended = !0, this.tokenizer.end(); };
    Qe.prototype.pause = function () { this.tokenizer.pause(); };
    Qe.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Qe.prototype.parseChunk = function (u) { this.write(u); };
    Qe.prototype.done = function (u) { this.end(u); };
    return Qe;
}());
var du = {};
Vu(du, { CDATA: function () { return _u; }, Comment: function () { return Zu; }, Directive: function () { return Qu; }, Doctype: function () { return et; }, ElementType: function () { return O; }, Root: function () { return Wu; }, Script: function () { return Xu; }, Style: function () { return Ju; }, Tag: function () { return Yu; }, Text: function () { return Ku; }, isTag: function () { return $u; } });
var O;
(function (e) { e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"; })(O || (O = {}));
function $u(e) { return e.type === O.Tag || e.type === O.Script || e.type === O.Style; }
var Wu = O.Root, Ku = O.Text, Qu = O.Directive, Zu = O.Comment, Xu = O.Script, Ju = O.Style, Yu = O.Tag, _u = O.CDATA, et = O.Doctype;
var hu = (function () {
    function hu() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(hu.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (u) { this.parent = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(hu.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (u) { this.prev = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(hu.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (u) { this.next = u; },
        enumerable: false,
        configurable: true
    });
    hu.prototype.cloneNode = function (u) {
        if (u === void 0) { u = !1; }
        return Xt(this, u);
    };
    return hu;
}()), Ze = (function (_super) {
    __extends(Ze, _super);
    function Ze(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = u;
        return _this;
    }
    Object.defineProperty(Ze.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (u) { this.data = u; },
        enumerable: false,
        configurable: true
    });
    return Ze;
}(hu)), Re = (function (_super) {
    __extends(Re, _super);
    function Re() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Text;
        return _this;
    }
    Object.defineProperty(Re.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return Re;
}(Ze)), Xe = (function (_super) {
    __extends(Xe, _super);
    function Xe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Comment;
        return _this;
    }
    Object.defineProperty(Xe.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return Xe;
}(Ze)), Je = (function (_super) {
    __extends(Je, _super);
    function Je(u, t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = u, _this.type = O.Directive;
        return _this;
    }
    Object.defineProperty(Je.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return Je;
}(Ze)), Ye = (function (_super) {
    __extends(Ye, _super);
    function Ye(u) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = u;
        return _this;
    }
    Object.defineProperty(Ye.prototype, "firstChild", {
        get: function () { var u; return (u = this.children[0]) !== null && u !== void 0 ? u : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ye.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ye.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (u) { this.children = u; },
        enumerable: false,
        configurable: true
    });
    return Ye;
}(hu)), _e = (function (_super) {
    __extends(_e, _super);
    function _e() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.CDATA;
        return _this;
    }
    Object.defineProperty(_e.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return _e;
}(Ye)), Pe = (function (_super) {
    __extends(Pe, _super);
    function Pe() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Root;
        return _this;
    }
    Object.defineProperty(Pe.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Pe;
}(Ye)), eu = (function (_super) {
    __extends(eu, _super);
    function eu(u, t, r, n) {
        if (r === void 0) { r = []; }
        if (n === void 0) { n = u === "script" ? O.Script : u === "style" ? O.Style : O.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = u, _this.attribs = t, _this.type = n;
        return _this;
    }
    Object.defineProperty(eu.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eu.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (u) { this.name = u; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eu.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (u) { var t, r; return { name: u, value: _this.attribs[u], namespace: (t = _this["x-attribsNamespace"]) === null || t === void 0 ? void 0 : t[u], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[u] }; });
        },
        enumerable: false,
        configurable: true
    });
    return eu;
}(Ye));
function H(e) { return $u(e); }
function Fe(e) { return e.type === O.CDATA; }
function he(e) { return e.type === O.Text; }
function uu(e) { return e.type === O.Comment; }
function m0(e) { return e.type === O.Directive; }
function tt(e) { return e.type === O.Root; }
function te(e) { return Object.prototype.hasOwnProperty.call(e, "children"); }
function Xt(e, u) {
    if (u === void 0) { u = !1; }
    var t;
    if (he(e))
        t = new Re(e.data);
    else if (uu(e))
        t = new Xe(e.data);
    else if (H(e)) {
        var r = u ? ut(e.children) : [], n_1 = new eu(e.name, de({}, e.attribs), r);
        r.forEach(function (i) { return i.parent = n_1; }), e.namespace != null && (n_1.namespace = e.namespace), e["x-attribsNamespace"] && (n_1["x-attribsNamespace"] = de({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (n_1["x-attribsPrefix"] = de({}, e["x-attribsPrefix"])), t = n_1;
    }
    else if (Fe(e)) {
        var r = u ? ut(e.children) : [], n_2 = new _e(r);
        r.forEach(function (i) { return i.parent = n_2; }), t = n_2;
    }
    else if (tt(e)) {
        var r = u ? ut(e.children) : [], n_3 = new Pe(r);
        r.forEach(function (i) { return i.parent = n_3; }), e["x-mode"] && (n_3["x-mode"] = e["x-mode"]), t = n_3;
    }
    else if (m0(e)) {
        var r = new Je(e.name, e.data);
        e["x-name"] != null && (r["x-name"] = e["x-name"], r["x-publicId"] = e["x-publicId"], r["x-systemId"] = e["x-systemId"]), t = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(e.type));
    return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
function ut(e) { var u = e.map(function (t) { return Xt(t, !0); }); for (var t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t]; return u; }
var Jt = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Ve = (function () {
    function Ve(u, t, r) {
        this.dom = [], this.root = new Pe(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof t == "function" && (r = t, t = Jt), typeof u == "object" && (t = u, u = void 0), this.callback = u != null ? u : null, this.options = t != null ? t : Jt, this.elementCB = r != null ? r : null;
    }
    Ve.prototype.onparserinit = function (u) { this.parser = u; };
    Ve.prototype.onreset = function () { this.dom = [], this.root = new Pe(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Ve.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Ve.prototype.onerror = function (u) { this.handleCallback(u); };
    Ve.prototype.onclosetag = function () { this.lastNode = null; var u = this.tagStack.pop(); this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u); };
    Ve.prototype.onopentag = function (u, t) { var r = this.options.xmlMode ? O.Tag : void 0, n = new eu(u, t, void 0, r); this.addNode(n), this.tagStack.push(n); };
    Ve.prototype.ontext = function (u) { var t = this.lastNode; if (t && t.type === O.Text)
        t.data += u, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
    else {
        var r = new Re(u);
        this.addNode(r), this.lastNode = r;
    } };
    Ve.prototype.oncomment = function (u) { if (this.lastNode && this.lastNode.type === O.Comment) {
        this.lastNode.data += u;
        return;
    } var t = new Xe(u); this.addNode(t), this.lastNode = t; };
    Ve.prototype.oncommentend = function () { this.lastNode = null; };
    Ve.prototype.oncdatastart = function () { var u = new Re(""), t = new _e([u]); this.addNode(t), u.parent = t, this.lastNode = u; };
    Ve.prototype.oncdataend = function () { this.lastNode = null; };
    Ve.prototype.onprocessinginstruction = function (u, t) { var r = new Je(u, t); this.addNode(r); };
    Ve.prototype.handleCallback = function (u) { if (typeof this.callback == "function")
        this.callback(u, this.dom);
    else if (u)
        throw u; };
    Ve.prototype.addNode = function (u) { var t = this.tagStack[this.tagStack.length - 1], r = t.children[t.children.length - 1]; this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), t.children.push(u), r && (u.prev = r, r.next = u), u.parent = t, this.lastNode = null; };
    return Ve;
}());
var be = {};
Vu(be, { DocumentPosition: function () { return le; }, append: function () { return H0; }, appendChild: function () { return B0; }, compareDocumentPosition: function () { return dr; }, existsOne: function () { return lr; }, filter: function () { return je; }, find: function () { return vu; }, findAll: function () { return F0; }, findOne: function () { return Su; }, findOneChild: function () { return P0; }, getAttributeValue: function () { return L0; }, getChildren: function () { return xu; }, getElementById: function () { return z0; }, getElements: function () { return j0; }, getElementsByClassName: function () { return $0; }, getElementsByTagName: function () { return Ce; }, getElementsByTagType: function () { return W0; }, getFeed: function () { return bt; }, getInnerHTML: function () { return I0; }, getName: function () { return M0; }, getOuterHTML: function () { return cr; }, getParent: function () { return or; }, getSiblings: function () { return yu; }, getText: function () { return mu; }, hasAttrib: function () { return U0; }, hasChildren: function () { return te; }, innerText: function () { return ct; }, isCDATA: function () { return Fe; }, isComment: function () { return uu; }, isDocument: function () { return tt; }, isTag: function () { return H; }, isText: function () { return he; }, nextElementSibling: function () { return ot; }, prepend: function () { return ft; }, prependChild: function () { return R0; }, prevElementSibling: function () { return lt; }, removeElement: function () { return xe; }, removeSubsets: function () { return K0; }, replaceElement: function () { return O0; }, testElement: function () { return G0; }, textContent: function () { return we; }, uniqueSort: function () { return ht; } });
function bu(e) { for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1; return e; }
var x0 = new Map(bu([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(bu([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(bu([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(bu([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var rt = /["&'<>$\x80-\uFFFF]/g, Yt = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), _t = String.prototype.codePointAt != null ? function (e, u) { return e.codePointAt(u); } : function (e, u) { return (e.charCodeAt(u) & 64512) === 55296 ? (e.charCodeAt(u) - 55296) * 1024 + e.charCodeAt(u + 1) - 56320 + 65536 : e.charCodeAt(u); };
function tu(e) { var u = "", t = 0, r; for (; (r = rt.exec(e)) !== null;) {
    var n = r.index, i = e.charCodeAt(n), a = Yt.get(i);
    a !== void 0 ? (u += e.substring(t, n) + a, t = n + 1) : (u += "".concat(e.substring(t, n), "&#x").concat(_t(e, n).toString(16), ";"), t = rt.lastIndex += +((i & 64512) === 55296));
} return u + e.substr(t); }
function nt(e, u) { return function (r) { var n, i = 0, a = ""; for (; n = e.exec(r);)
    i !== n.index && (a += r.substring(i, n.index)), a += u.get(n[0].charCodeAt(0)), i = n.index + 1; return a + r.substring(i); }; }
var er = nt(/[&<>'"]/g, Yt), pu = nt(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), gu = nt(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var ur;
(function (e) { e[e.XML = 0] = "XML", e[e.HTML = 1] = "HTML"; })(ur || (ur = {}));
var tr;
(function (e) { e[e.UTF8 = 0] = "UTF8", e[e.ASCII = 1] = "ASCII", e[e.Extensive = 2] = "Extensive", e[e.Attribute = 3] = "Attribute", e[e.Text = 4] = "Text"; })(tr || (tr = {}));
var ir = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (e) { return [e.toLowerCase(), e]; })), ar = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (e) { return [e.toLowerCase(), e]; }));
var v0 = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function S0(e) { return e.replace(/"/g, "&quot;"); }
function w0(e, u) { var t; if (!e)
    return; var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? S0 : u.xmlMode || u.encodeEntities !== "utf8" ? tu : pu; return Object.keys(e).map(function (n) { var i, a; var o = (i = e[n]) !== null && i !== void 0 ? i : ""; return u.xmlMode === "foreign" && (n = (a = ar.get(n)) !== null && a !== void 0 ? a : n), !u.emptyAttrs && !u.xmlMode && o === "" ? n : "".concat(n, "=\"").concat(r(o), "\""); }).join(" "); }
var sr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function st(e, u) {
    if (u === void 0) { u = {}; }
    var t = "length" in e ? e : [e], r = "";
    for (var n = 0; n < t.length; n++)
        r += A0(t[n], u);
    return r;
}
var Ge = st;
function A0(e, u) { switch (e.type) {
    case Wu: return st(e.children, u);
    case et:
    case Qu: return N0(e);
    case Zu: return q0(e);
    case _u: return D0(e);
    case Xu:
    case Ju:
    case Yu: return k0(e, u);
    case Ku: return C0(e, u);
} }
var E0 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), T0 = new Set(["svg", "math"]);
function k0(e, u) { var t; u.xmlMode === "foreign" && (e.name = (t = ir.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && E0.has(e.parent.name) && (u = ke(de({}, u), { xmlMode: !1 }))), !u.xmlMode && T0.has(e.name) && (u = ke(de({}, u), { xmlMode: "foreign" })); var r = "<".concat(e.name), n = w0(e.attribs, u); return n && (r += " ".concat(n)), e.children.length === 0 && (u.xmlMode ? u.selfClosingTags !== !1 : u.selfClosingTags && sr.has(e.name)) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += st(e.children, u)), (u.xmlMode || !sr.has(e.name)) && (r += "</".concat(e.name, ">"))), r; }
function N0(e) { return "<".concat(e.data, ">"); }
function C0(e, u) { var t; var r = e.data || ""; return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && v0.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? tu(r) : gu(r)), r; }
function D0(e) { return "<![CDATA[".concat(e.children[0].data, "]]>"); }
function q0(e) { return "<!--".concat(e.data, "-->"); }
function cr(e, u) { return Ge(e, u); }
function I0(e, u) { return te(e) ? e.children.map(function (t) { return cr(t, u); }).join("") : ""; }
function mu(e) {
    return Array.isArray(e) ? e.map(mu).join("") : H(e) ? e.name === "br" ? "\n" : mu(e.children) : Fe(e) ? mu(e.children) : he(e) ? e.data : "";
}
function we(e) { return Array.isArray(e) ? e.map(we).join("") : te(e) && !uu(e) ? we(e.children) : he(e) ? e.data : ""; }
function ct(e) { return Array.isArray(e) ? e.map(ct).join("") : te(e) && (e.type === O.Tag || Fe(e)) ? ct(e.children) : he(e) ? e.data : ""; }
function xu(e) { return te(e) ? e.children : []; }
function or(e) { return e.parent || null; }
function yu(e) {
    var _a, _b;
    var u = or(e);
    if (u != null)
        return xu(u);
    var t = [e], r = e.prev, n = e.next;
    for (; r != null;)
        t.unshift(r), _a = r, r = _a.prev;
    for (; n != null;)
        t.push(n), _b = n, n = _b.next;
    return t;
}
function L0(e, u) { var t; return (t = e.attribs) === null || t === void 0 ? void 0 : t[u]; }
function U0(e, u) { return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null; }
function M0(e) { return e.name; }
function ot(e) {
    var _a;
    var u = e.next;
    for (; u !== null && !H(u);)
        (_a = u, u = _a.next);
    return u;
}
function lt(e) {
    var _a;
    var u = e.prev;
    for (; u !== null && !H(u);)
        (_a = u, u = _a.prev);
    return u;
}
function xe(e) { if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
} e.next = null, e.prev = null, e.parent = null; }
function O0(e, u) { var t = u.prev = e.prev; t && (t.next = u); var r = u.next = e.next; r && (r.prev = u); var n = u.parent = e.parent; if (n) {
    var i = n.children;
    i[i.lastIndexOf(e)] = u, e.parent = null;
} }
function B0(e, u) { if (xe(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
}
else
    u.prev = null; }
function H0(e, u) { xe(u); var t = e.parent, r = e.next; if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
        var n = t.children;
        n.splice(n.lastIndexOf(r), 0, u);
    }
}
else
    t && t.children.push(u); }
function R0(e, u) { if (xe(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
}
else
    u.next = null; }
function ft(e, u) { xe(u); var t = e.parent; if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
} e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u; }
function je(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return vu(e, Array.isArray(u) ? u : [u], t, r);
}
function vu(e, u, t, r) { var n = [], i = [Array.isArray(u) ? u : [u]], a = [0]; for (;;) {
    if (a[0] >= i[0].length) {
        if (a.length === 1)
            return n;
        i.shift(), a.shift();
        continue;
    }
    var o = i[0][a[0]++];
    if (e(o) && (n.push(o), --r <= 0))
        return n;
    t && te(o) && o.children.length > 0 && (a.unshift(0), i.unshift(o.children));
} }
function P0(e, u) { return u.find(e); }
function Su(e, u, t) {
    if (t === void 0) { t = !0; }
    var r = Array.isArray(u) ? u : [u];
    for (var n = 0; n < r.length; n++) {
        var i = r[n];
        if (H(i) && e(i))
            return i;
        if (t && te(i) && i.children.length > 0) {
            var a = Su(e, i.children, !0);
            if (a)
                return a;
        }
    }
    return null;
}
function lr(e, u) { return (Array.isArray(u) ? u : [u]).some(function (t) { return H(t) && e(t) || te(t) && lr(e, t.children); }); }
function F0(e, u) { var t = [], r = [Array.isArray(u) ? u : [u]], n = [0]; for (;;) {
    if (n[0] >= r[0].length) {
        if (r.length === 1)
            return t;
        r.shift(), n.shift();
        continue;
    }
    var i = r[0][n[0]++];
    H(i) && e(i) && t.push(i), te(i) && i.children.length > 0 && (n.unshift(0), r.unshift(i.children));
} }
var wu = { tag_name: function (e) { return typeof e == "function" ? function (u) { return H(u) && e(u.name); } : e === "*" ? H : function (u) { return H(u) && u.name === e; }; }, tag_type: function (e) { return typeof e == "function" ? function (u) { return e(u.type); } : function (u) { return u.type === e; }; }, tag_contains: function (e) { return typeof e == "function" ? function (u) { return he(u) && e(u.data); } : function (u) { return he(u) && u.data === e; }; } };
function dt(e, u) { return typeof u == "function" ? function (t) { return H(t) && u(t.attribs[e]); } : function (t) { return H(t) && t.attribs[e] === u; }; }
function V0(e, u) { return function (t) { return e(t) || u(t); }; }
function fr(e) { var u = Object.keys(e).map(function (t) { var r = e[t]; return Object.prototype.hasOwnProperty.call(wu, t) ? wu[t](r) : dt(t, r); }); return u.length === 0 ? null : u.reduce(V0); }
function G0(e, u) { var t = fr(e); return t ? t(u) : !0; }
function j0(e, u, t, r) {
    if (r === void 0) { r = 1 / 0; }
    var n = fr(e);
    return n ? je(n, u, t, r) : [];
}
function z0(e, u, t) {
    if (t === void 0) { t = !0; }
    return Array.isArray(u) || (u = [u]), Su(dt("id", e), u, t);
}
function Ce(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return je(wu.tag_name(e), u, t, r);
}
function $0(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return je(dt("class", e), u, t, r);
}
function W0(e, u, t, r) {
    if (t === void 0) { t = !0; }
    if (r === void 0) { r = 1 / 0; }
    return je(wu.tag_type(e), u, t, r);
}
function K0(e) { var u = e.length; for (; --u >= 0;) {
    var t = e[u];
    if (u > 0 && e.lastIndexOf(t, u - 1) >= 0) {
        e.splice(u, 1);
        continue;
    }
    for (var r = t.parent; r; r = r.parent)
        if (e.includes(r)) {
            e.splice(u, 1);
            break;
        }
} return e; }
var le;
(function (e) { e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY"; })(le || (le = {}));
function dr(e, u) { var t = [], r = []; if (e === u)
    return 0; var n = te(e) ? e : e.parent; for (; n;)
    t.unshift(n), n = n.parent; for (n = te(u) ? u : u.parent; n;)
    r.unshift(n), n = n.parent; var i = Math.min(t.length, r.length), a = 0; for (; a < i && t[a] === r[a];)
    a++; if (a === 0)
    return le.DISCONNECTED; var o = t[a - 1], h = o.children, b = t[a], v = r[a]; return h.indexOf(b) > h.indexOf(v) ? o === u ? le.FOLLOWING | le.CONTAINED_BY : le.FOLLOWING : o === e ? le.PRECEDING | le.CONTAINS : le.PRECEDING; }
function ht(e) { return e = e.filter(function (u, t, r) { return !r.includes(u, t + 1); }), e.sort(function (u, t) { var r = dr(u, t); return r & le.PRECEDING ? -1 : r & le.FOLLOWING ? 1 : 0; }), e; }
function bt(e) { var u = Au(Y0, e); return u ? u.name === "feed" ? Q0(u) : Z0(u) : null; }
function Q0(e) { var u; var t = e.children, r = { type: "atom", items: Ce("entry", t).map(function (a) { var o; var h = a.children, b = { media: hr(h) }; ie(b, "id", "id", h), ie(b, "title", "title", h); var v = (o = Au("link", h)) === null || o === void 0 ? void 0 : o.attribs.href; v && (b.link = v); var D = Ae("summary", h) || Ae("content", h); D && (b.description = D); var A = Ae("updated", h); return A && (b.pubDate = new Date(A)), b; }) }; ie(r, "id", "id", t), ie(r, "title", "title", t); var n = (u = Au("link", t)) === null || u === void 0 ? void 0 : u.attribs.href; n && (r.link = n), ie(r, "description", "subtitle", t); var i = Ae("updated", t); return i && (r.updated = new Date(i)), ie(r, "author", "email", t, !0), r; }
function Z0(e) { var u, t; var r = (t = (u = Au("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], n = { type: e.name.substr(0, 3), id: "", items: Ce("item", e.children).map(function (a) { var o = a.children, h = { media: hr(o) }; ie(h, "id", "guid", o), ie(h, "title", "title", o), ie(h, "link", "link", o), ie(h, "description", "description", o); var b = Ae("pubDate", o) || Ae("dc:date", o); return b && (h.pubDate = new Date(b)), h; }) }; ie(n, "title", "title", r), ie(n, "link", "link", r), ie(n, "description", "description", r); var i = Ae("lastBuildDate", r); return i && (n.updated = new Date(i)), ie(n, "author", "managingEditor", r, !0), n; }
var X0 = ["url", "type", "lang"], J0 = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function hr(e) { return Ce("media:content", e).map(function (u) {
    var e_4, _a, e_5, _b;
    var t = u.attribs, r = { medium: t.medium, isDefault: !!t.isDefault };
    try {
        for (var X0_1 = __values(X0), X0_1_1 = X0_1.next(); !X0_1_1.done; X0_1_1 = X0_1.next()) {
            var n = X0_1_1.value;
            t[n] && (r[n] = t[n]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (X0_1_1 && !X0_1_1.done && (_a = X0_1.return)) _a.call(X0_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var J0_1 = __values(J0), J0_1_1 = J0_1.next(); !J0_1_1.done; J0_1_1 = J0_1.next()) {
            var n = J0_1_1.value;
            t[n] && (r[n] = parseInt(t[n], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (J0_1_1 && !J0_1_1.done && (_b = J0_1.return)) _b.call(J0_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return t.expression && (r.expression = t.expression), r;
}); }
function Au(e, u) { return Ce(e, u, !0, 1)[0]; }
function Ae(e, u, t) {
    if (t === void 0) { t = !1; }
    return we(Ce(e, u, t, 1)).trim();
}
function ie(e, u, t, r, n) {
    if (n === void 0) { n = !1; }
    var i = Ae(t, r, n);
    i && (e[u] = i);
}
function Y0(e) { return e === "rss" || e === "feed" || e === "rdf:RDF"; }
function br(e, u) { var t = new Ve(void 0, u); return new Qe(t, u).end(e), t.root; }
var T;
(function (e) { e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"; })(T || (T = {}));
var $;
(function (e) { e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"; })($ || ($ = {}));
var pr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, _0 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, en = new Map([[126, $.Element], [94, $.Start], [36, $.End], [42, $.Any], [33, $.Not], [124, $.Hyphen]]), un = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function De(e) { switch (e.type) {
    case T.Adjacent:
    case T.Child:
    case T.Descendant:
    case T.Parent:
    case T.Sibling:
    case T.ColumnCombinator: return !0;
    default: return !1;
} }
var tn = new Set(["contains", "icontains"]);
function rn(e, u, t) { var r = parseInt(u, 16) - 65536; return r !== r || t ? u : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function ru(e) { return e.replace(_0, rn); }
function pt(e) { return e === 39 || e === 34; }
function gr(e) { return e === 32 || e === 9 || e === 10 || e === 12 || e === 13; }
function Ee(e) { var u = [], t = mr(u, "".concat(e), 0); if (t < e.length)
    throw new Error("Unmatched selector: ".concat(e.slice(t))); return u; }
function mr(e, u, t) { var r = []; function n(A) { var E = u.slice(t + A).match(pr); if (!E)
    throw new Error("Expected name, found ".concat(u.slice(t))); var _a = __read(E, 1), q = _a[0]; return t += A + q.length, ru(q); } function i(A) { for (t += A; t < u.length && gr(u.charCodeAt(t));)
    t++; } function a() { t += 1; var A = t, E = 1; for (; E > 0 && t < u.length; t++)
    u.charCodeAt(t) === 40 && !o(t) ? E++ : u.charCodeAt(t) === 41 && !o(t) && E--; if (E)
    throw new Error("Parenthesis not matched"); return ru(u.slice(A, t - 1)); } function o(A) { var E = 0; for (; u.charCodeAt(--A) === 92;)
    E++; return (E & 1) === 1; } function h() { if (r.length > 0 && De(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function b(A) { if (r.length > 0 && r[r.length - 1].type === T.Descendant) {
    r[r.length - 1].type = A;
    return;
} h(), r.push({ type: A }); } function v(A, E) { r.push({ type: T.Attribute, name: A, action: E, value: n(1), namespace: null, ignoreCase: "quirks" }); } function D() { if (r.length && r[r.length - 1].type === T.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); e.push(r); } if (i(0), u.length === t)
    return t; e: for (; t < u.length;) {
    var A = u.charCodeAt(t);
    switch (A) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== T.Descendant) && (h(), r.push({ type: T.Descendant })), i(1);
            break;
        }
        case 62: {
            b(T.Child), i(1);
            break;
        }
        case 60: {
            b(T.Parent), i(1);
            break;
        }
        case 126: {
            b(T.Sibling), i(1);
            break;
        }
        case 43: {
            b(T.Adjacent), i(1);
            break;
        }
        case 46: {
            v("class", $.Element);
            break;
        }
        case 35: {
            v("id", $.Equals);
            break;
        }
        case 91: {
            i(1);
            var E = void 0, q = null;
            u.charCodeAt(t) === 124 ? E = n(1) : u.startsWith("*|", t) ? (q = "*", E = n(2)) : (E = n(0), u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 61 && (q = E, E = n(1))), i(0);
            var M = $.Exists, J = en.get(u.charCodeAt(t));
            if (J) {
                if (M = J, u.charCodeAt(t + 1) !== 61)
                    throw new Error("Expected `=`");
                i(2);
            }
            else
                u.charCodeAt(t) === 61 && (M = $.Equals, i(1));
            var ee = "", ce = null;
            if (M !== "exists") {
                if (pt(u.charCodeAt(t))) {
                    var L = u.charCodeAt(t), C = t + 1;
                    for (; C < u.length && (u.charCodeAt(C) !== L || o(C));)
                        C += 1;
                    if (u.charCodeAt(C) !== L)
                        throw new Error("Attribute value didn't end");
                    ee = ru(u.slice(t + 1, C)), t = C + 1;
                }
                else {
                    var L = t;
                    for (; t < u.length && (!gr(u.charCodeAt(t)) && u.charCodeAt(t) !== 93 || o(t));)
                        t += 1;
                    ee = ru(u.slice(L, t));
                }
                i(0);
                var U = u.charCodeAt(t) | 32;
                U === 115 ? (ce = !1, i(1)) : U === 105 && (ce = !0, i(1));
            }
            if (u.charCodeAt(t) !== 93)
                throw new Error("Attribute selector didn't terminate");
            t += 1;
            var F = { type: T.Attribute, name: E, action: M, value: ee, namespace: q, ignoreCase: ce };
            r.push(F);
            break;
        }
        case 58: {
            if (u.charCodeAt(t + 1) === 58) {
                r.push({ type: T.PseudoElement, name: n(2).toLowerCase(), data: u.charCodeAt(t) === 40 ? a() : null });
                continue;
            }
            var E = n(1).toLowerCase(), q = null;
            if (u.charCodeAt(t) === 40)
                if (un.has(E)) {
                    if (pt(u.charCodeAt(t + 1)))
                        throw new Error("Pseudo-selector ".concat(E, " cannot be quoted"));
                    if (q = [], t = mr(q, u, t + 1), u.charCodeAt(t) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(E, " (").concat(u, ")"));
                    t += 1;
                }
                else {
                    if (q = a(), tn.has(E)) {
                        var M = q.charCodeAt(0);
                        M === q.charCodeAt(q.length - 1) && pt(M) && (q = q.slice(1, -1));
                    }
                    q = ru(q);
                }
            r.push({ type: T.Pseudo, name: E, data: q });
            break;
        }
        case 44: {
            D(), r = [], i(1);
            break;
        }
        default: {
            if (u.startsWith("/*", t)) {
                var M = u.indexOf("*/", t + 2);
                if (M < 0)
                    throw new Error("Comment was not terminated");
                t = M + 2, r.length === 0 && i(0);
                break;
            }
            var E = null, q = void 0;
            if (A === 42)
                t += 1, q = "*";
            else if (A === 124) {
                if (q = "", u.charCodeAt(t + 1) === 124) {
                    b(T.ColumnCombinator), i(2);
                    break;
                }
            }
            else if (pr.test(u.slice(t)))
                q = n(0);
            else
                break e;
            u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 124 && (E = q, u.charCodeAt(t + 1) === 42 ? (q = "*", t += 2) : q = n(1)), r.push(q === "*" ? { type: T.Universal, namespace: E } : { type: T.Tag, name: q, namespace: E });
        }
    }
} return D(), t; }
var kt = Ne(Te(), 1);
var ye = Ne(Te(), 1);
var yr = new Map([[T.Universal, 50], [T.Tag, 30], [T.Attribute, 1], [T.Pseudo, 0]]);
function nu(e) { return !yr.has(e.type); }
var nn = new Map([[$.Exists, 10], [$.Equals, 8], [$.Not, 7], [$.Start, 6], [$.End, 6], [$.Any, 5]]);
function gt(e) { var u = e.map(vr); for (var t = 1; t < e.length; t++) {
    var r = u[t];
    if (!(r < 0))
        for (var n = t - 1; n >= 0 && r < u[n]; n--) {
            var i = e[n + 1];
            e[n + 1] = e[n], e[n] = i, u[n + 1] = u[n], u[n] = r;
        }
} }
function vr(e) { var u, t; var r = (u = yr.get(e.type)) !== null && u !== void 0 ? u : -1; return e.type === T.Attribute ? (r = (t = nn.get(e.action)) !== null && t !== void 0 ? t : 4, e.action === $.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === T.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(e.data.map(function (n) { return Math.min.apply(Math, __spreadArray([], __read(n.map(vr)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var iu = Ne(Te(), 1), an = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Sr(e) { return e.replace(an, "\\$&"); }
var sn = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function qe(e, u) { return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!u.quirksMode : !u.xmlMode && sn.has(e.name); }
var wr = { equals: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; return qe(u, t) ? (i = i.toLowerCase(), function (a) { var o = r.getAttributeValue(a, n); return o != null && o.length === i.length && o.toLowerCase() === i && e(a); }) : function (a) { return r.getAttributeValue(a, n) === i && e(a); }; }, hyphen: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value, a = i.length; return qe(u, t) ? (i = i.toLowerCase(), function (h) { var b = r.getAttributeValue(h, n); return b != null && (b.length === a || b.charAt(a) === "-") && b.substr(0, a).toLowerCase() === i && e(h); }) : function (h) { var b = r.getAttributeValue(h, n); return b != null && (b.length === a || b.charAt(a) === "-") && b.substr(0, a) === i && e(h); }; }, element: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; if (/\s/.test(i))
        return iu.default.falseFunc; var a = new RegExp("(?:^|\\s)".concat(Sr(i), "(?:$|\\s)"), qe(u, t) ? "i" : ""); return function (h) { var b = r.getAttributeValue(h, n); return b != null && b.length >= i.length && a.test(b) && e(h); }; }, exists: function (e, _a, _b) {
        var u = _a.name;
        var t = _b.adapter;
        return function (r) { return t.hasAttrib(r, u) && e(r); };
    }, start: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value, a = i.length; return a === 0 ? iu.default.falseFunc : qe(u, t) ? (i = i.toLowerCase(), function (o) { var h = r.getAttributeValue(o, n); return h != null && h.length >= a && h.substr(0, a).toLowerCase() === i && e(o); }) : function (o) { var h; return !!(!((h = r.getAttributeValue(o, n)) === null || h === void 0) && h.startsWith(i)) && e(o); }; }, end: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value, a = -i.length; return a === 0 ? iu.default.falseFunc : qe(u, t) ? (i = i.toLowerCase(), function (o) { var h; return ((h = r.getAttributeValue(o, n)) === null || h === void 0 ? void 0 : h.substr(a).toLowerCase()) === i && e(o); }) : function (o) { var h; return !!(!((h = r.getAttributeValue(o, n)) === null || h === void 0) && h.endsWith(i)) && e(o); }; }, any: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; if (i === "")
        return iu.default.falseFunc; if (qe(u, t)) {
        var a_1 = new RegExp(Sr(i), "i");
        return function (h) { var b = r.getAttributeValue(h, n); return b != null && b.length >= i.length && a_1.test(b) && e(h); };
    } return function (a) { var o; return !!(!((o = r.getAttributeValue(a, n)) === null || o === void 0) && o.includes(i)) && e(a); }; }, not: function (e, u, t) { var r = t.adapter, n = u.name, i = u.value; return i === "" ? function (a) { return !!r.getAttributeValue(a, n) && e(a); } : qe(u, t) ? (i = i.toLowerCase(), function (a) { var o = r.getAttributeValue(a, n); return (o == null || o.length !== i.length || o.toLowerCase() !== i) && e(a); }) : function (a) { return r.getAttributeValue(a, n) !== i && e(a); }; } };
var cn = new Set([9, 10, 12, 13, 32]), Ar = 48, on = 57;
function Er(e) { if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0]; if (e === "odd")
    return [2, 1]; var u = 0, t = 0, r = i(), n = a(); if (u < e.length && e.charAt(u) === "n" && (u++, t = r * (n != null ? n : 1), o(), u < e.length ? (r = i(), o(), n = a()) : r = n = 0), n === null || u < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')")); return [t, r * n]; function i() { return e.charAt(u) === "-" ? (u++, -1) : (e.charAt(u) === "+" && u++, 1); } function a() { var h = u, b = 0; for (; u < e.length && e.charCodeAt(u) >= Ar && e.charCodeAt(u) <= on;)
    b = b * 10 + (e.charCodeAt(u) - Ar), u++; return u === h ? null : b; } function o() { for (; u < e.length && cn.has(e.charCodeAt(u));)
    u++; } }
var mt = Ne(Te(), 1);
function Tr(e) { var u = e[0], t = e[1] - 1; if (t < 0 && u <= 0)
    return mt.default.falseFunc; if (u === -1)
    return function (i) { return i <= t; }; if (u === 0)
    return function (i) { return i === t; }; if (u === 1)
    return t < 0 ? mt.default.trueFunc : function (i) { return i >= t; }; var r = Math.abs(u), n = (t % r + r) % r; return u > 1 ? function (i) { return i >= t && i % r === n; } : function (i) { return i <= t && i % r === n; }; }
function ze(e) { return Tr(Er(e)); }
var ae = Ne(Te(), 1);
function Eu(e, u) { return function (t) { var r = u.getParent(t); return r != null && u.isTag(r) && e(t); }; }
var $e = { contains: function (e, u, _a) {
        var t = _a.adapter;
        return function (n) { return e(n) && t.getText(n).includes(u); };
    }, icontains: function (e, u, _a) {
        var t = _a.adapter;
        var r = u.toLowerCase();
        return function (i) { return e(i) && t.getText(i).toLowerCase().includes(r); };
    }, "nth-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = ze(u);
        return n === ae.default.falseFunc ? ae.default.falseFunc : n === ae.default.trueFunc ? Eu(e, t) : function (a) { var o = t.getSiblings(a), h = 0; for (var b = 0; b < o.length && !r(a, o[b]); b++)
            t.isTag(o[b]) && h++; return n(h) && e(a); };
    }, "nth-last-child": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = ze(u);
        return n === ae.default.falseFunc ? ae.default.falseFunc : n === ae.default.trueFunc ? Eu(e, t) : function (a) { var o = t.getSiblings(a), h = 0; for (var b = o.length - 1; b >= 0 && !r(a, o[b]); b--)
            t.isTag(o[b]) && h++; return n(h) && e(a); };
    }, "nth-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = ze(u);
        return n === ae.default.falseFunc ? ae.default.falseFunc : n === ae.default.trueFunc ? Eu(e, t) : function (a) { var o = t.getSiblings(a), h = 0; for (var b = 0; b < o.length; b++) {
            var v = o[b];
            if (r(a, v))
                break;
            t.isTag(v) && t.getName(v) === t.getName(a) && h++;
        } return n(h) && e(a); };
    }, "nth-last-of-type": function (e, u, _a) {
        var t = _a.adapter, r = _a.equals;
        var n = ze(u);
        return n === ae.default.falseFunc ? ae.default.falseFunc : n === ae.default.trueFunc ? Eu(e, t) : function (a) { var o = t.getSiblings(a), h = 0; for (var b = o.length - 1; b >= 0; b--) {
            var v = o[b];
            if (r(a, v))
                break;
            t.isTag(v) && t.getName(v) === t.getName(a) && h++;
        } return n(h) && e(a); };
    }, root: function (e, u, _a) {
        var t = _a.adapter;
        return function (r) { var n = t.getParent(r); return (n == null || !t.isTag(n)) && e(r); };
    }, scope: function (e, u, t, r) { var n = t.equals; return !r || r.length === 0 ? $e.root(e, u, t) : r.length === 1 ? function (i) { return n(r[0], i) && e(i); } : function (i) { return r.includes(i) && e(i); }; }, hover: xt("isHovered"), visited: xt("isVisited"), active: xt("isActive") };
function xt(e) { return function (t, r, _a) {
    var n = _a.adapter;
    var i = n[e];
    return typeof i != "function" ? ae.default.falseFunc : function (o) { return i(o) && t(o); };
}; }
var au = { empty: function (e, _a) {
        var u = _a.adapter;
        return !u.getChildren(e).some(function (t) { return u.isTag(t) || u.getText(t) !== ""; });
    }, "first-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        if (u.prevElementSibling)
            return u.prevElementSibling(e) == null;
        var r = u.getSiblings(e).find(function (n) { return u.isTag(n); });
        return r != null && t(e, r);
    }, "last-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e);
        for (var n = r.length - 1; n >= 0; n--) {
            if (t(e, r[n]))
                return !0;
            if (u.isTag(r[n]))
                break;
        }
        return !1;
    }, "first-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), n = u.getName(e);
        for (var i = 0; i < r.length; i++) {
            var a = r[i];
            if (t(e, a))
                return !0;
            if (u.isTag(a) && u.getName(a) === n)
                break;
        }
        return !1;
    }, "last-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getSiblings(e), n = u.getName(e);
        for (var i = r.length - 1; i >= 0; i--) {
            var a = r[i];
            if (t(e, a))
                return !0;
            if (u.isTag(a) && u.getName(a) === n)
                break;
        }
        return !1;
    }, "only-of-type": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        var r = u.getName(e);
        return u.getSiblings(e).every(function (n) { return t(e, n) || !u.isTag(n) || u.getName(n) !== r; });
    }, "only-child": function (e, _a) {
        var u = _a.adapter, t = _a.equals;
        return u.getSiblings(e).every(function (r) { return t(e, r) || !u.isTag(r); });
    } };
function yt(e, u, t, r) { if (t === null) {
    if (e.length > r)
        throw new Error("Pseudo-class :".concat(u, " requires an argument"));
}
else if (e.length === r)
    throw new Error("Pseudo-class :".concat(u, " doesn't have any arguments")); }
var Tu = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var fe = Ne(Te(), 1);
var wt = {};
function At(e, u) { return e === fe.default.falseFunc ? fe.default.falseFunc : function (t) { return u.isTag(t) && e(t); }; }
function Et(e, u) { var t = u.getSiblings(e); if (t.length <= 1)
    return []; var r = t.indexOf(e); return r < 0 || r === t.length - 1 ? [] : t.slice(r + 1).filter(u.isTag); }
function St(e) { return { xmlMode: !!e.xmlMode, lowerCaseAttributeNames: !!e.lowerCaseAttributeNames, lowerCaseTags: !!e.lowerCaseTags, quirksMode: !!e.quirksMode, cacheResults: !!e.cacheResults, pseudos: e.pseudos, adapter: e.adapter, equals: e.equals }; }
var vt = function (e, u, t, r, n) { var i = n(u, St(t), r); return i === fe.default.trueFunc ? e : i === fe.default.falseFunc ? fe.default.falseFunc : function (a) { return i(a) && e(a); }; }, ku = { is: vt, matches: vt, where: vt, not: function (e, u, t, r, n) { var i = n(u, St(t), r); return i === fe.default.falseFunc ? e : i === fe.default.trueFunc ? fe.default.falseFunc : function (a) { return !i(a) && e(a); }; }, has: function (e, u, t, r, n) { var i = t.adapter, a = St(t); a.relativeSelector = !0; var o = u.some(function (v) { return v.some(nu); }) ? [wt] : void 0, h = n(u, a, o); if (h === fe.default.falseFunc)
        return fe.default.falseFunc; var b = At(h, i); if (o && h !== fe.default.trueFunc) {
        var _a = h.shouldTestNextSiblings, v_1 = _a === void 0 ? !1 : _a;
        return function (D) { if (!e(D))
            return !1; o[0] = D; var A = i.getChildren(D), E = v_1 ? __spreadArray(__spreadArray([], __read(A), false), __read(Et(D, i)), false) : A; return i.existsOne(b, E); };
    } return function (v) { return e(v) && i.existsOne(b, i.getChildren(v)); }; } };
function kr(e, u, t, r, n) { var i; var a = u.name, o = u.data; if (Array.isArray(o)) {
    if (!(a in ku))
        throw new Error("Unknown pseudo-class :".concat(a, "(").concat(o, ")"));
    return ku[a](e, o, t, r, n);
} var h = (i = t.pseudos) === null || i === void 0 ? void 0 : i[a], b = typeof h == "string" ? h : Tu[a]; if (typeof b == "string") {
    if (o != null)
        throw new Error("Pseudo ".concat(a, " doesn't have any arguments"));
    var v = Ee(b);
    return ku.is(e, v, t, r, n);
} if (typeof h == "function")
    return yt(h, a, o, 1), function (v) { return h(v, o) && e(v); }; if (a in $e)
    return $e[a](e, o, t, r); if (a in au) {
    var v_2 = au[a];
    return yt(v_2, a, o, 2), function (D) { return v_2(D, t, o) && e(D); };
} throw new Error("Unknown pseudo-class :".concat(a)); }
function Tt(e, u) { var t = u.getParent(e); return t && u.isTag(t) ? t : null; }
function Nr(e, u, t, r, n) { var i = t.adapter, a = t.equals; switch (u.type) {
    case T.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case T.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case T.Attribute: {
        if (u.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!t.xmlMode || t.lowerCaseAttributeNames) && (u.name = u.name.toLowerCase()), wr[u.action](e, u, t);
    }
    case T.Pseudo: return kr(e, u, t, r, n);
    case T.Tag: {
        if (u.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var o_1 = u.name;
        return (!t.xmlMode || t.lowerCaseTags) && (o_1 = o_1.toLowerCase()), function (b) { return i.getName(b) === o_1 && e(b); };
    }
    case T.Descendant: {
        if (t.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (b) { var v = b; for (; v = Tt(v, i);)
                if (e(v))
                    return !0; return !1; };
        var o_2 = new WeakSet;
        return function (b) { var v = b; for (; v = Tt(v, i);)
            if (!o_2.has(v)) {
                if (i.isTag(v) && e(v))
                    return !0;
                o_2.add(v);
            } return !1; };
    }
    case "_flexibleDescendant": return function (h) { var b = h; do
        if (e(b))
            return !0;
    while (b = Tt(b, i)); return !1; };
    case T.Parent: return function (h) { return i.getChildren(h).some(function (b) { return i.isTag(b) && e(b); }); };
    case T.Child: return function (h) { var b = i.getParent(h); return b != null && i.isTag(b) && e(b); };
    case T.Sibling: return function (h) { var b = i.getSiblings(h); for (var v = 0; v < b.length; v++) {
        var D = b[v];
        if (a(h, D))
            break;
        if (i.isTag(D) && e(D))
            return !0;
    } return !1; };
    case T.Adjacent: return i.prevElementSibling ? function (h) { var b = i.prevElementSibling(h); return b != null && e(b); } : function (h) { var b = i.getSiblings(h), v; for (var D = 0; D < b.length; D++) {
        var A = b[D];
        if (a(h, A))
            break;
        i.isTag(A) && (v = A);
    } return !!v && e(v); };
    case T.Universal: {
        if (u.namespace != null && u.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return e;
    }
} }
function Cr(e, u, t) { var r = Nu(e, u, t); return At(r, u.adapter); }
function Nu(e, u, t) { var r = typeof e == "string" ? Ee(e) : e; return Cu(r, u, t); }
function Dr(e) { return e.type === T.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function (u) { return u.some(Dr); })); }
var ln = { type: T.Descendant }, fn = { type: "_flexibleDescendant" }, dn = { type: T.Pseudo, name: "scope", data: null };
function hn(e, _a, t) {
    var e_6, _b;
    var u = _a.adapter;
    var r = !!(t != null && t.every(function (n) { var i = u.isTag(n) && u.getParent(n); return n === wt || i && u.isTag(i); }));
    try {
        for (var e_7 = __values(e), e_7_1 = e_7.next(); !e_7_1.done; e_7_1 = e_7.next()) {
            var n = e_7_1.value;
            if (!(n.length > 0 && nu(n[0]) && n[0].type !== T.Descendant))
                if (r && !n.some(Dr))
                    n.unshift(ln);
                else
                    continue;
            n.unshift(dn);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (e_7_1 && !e_7_1.done && (_b = e_7.return)) _b.call(e_7);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function Cu(e, u, t) { var r; e.forEach(gt), t = (r = u.context) !== null && r !== void 0 ? r : t; var n = Array.isArray(t), i = t && (Array.isArray(t) ? t : [t]); if (u.relativeSelector !== !1)
    hn(e, u, i);
else if (e.some(function (h) { return h.length > 0 && nu(h[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var a = !1, o = e.map(function (h) { if (h.length >= 2) {
    var _a = __read(h, 2), b = _a[0], v = _a[1];
    b.type !== T.Pseudo || b.name !== "scope" || (n && v.type === T.Descendant ? h[1] = fn : (v.type === T.Adjacent || v.type === T.Sibling) && (a = !0));
} return bn(h, u, i); }).reduce(pn, ye.default.falseFunc); return o.shouldTestNextSiblings = a, o; }
function bn(e, u, t) { var r; return e.reduce(function (n, i) { return n === ye.default.falseFunc ? ye.default.falseFunc : Nr(n, i, u, t, Cu); }, (r = u.rootFunc) !== null && r !== void 0 ? r : ye.default.trueFunc); }
function pn(e, u) { return u === ye.default.falseFunc || e === ye.default.trueFunc ? e : e === ye.default.falseFunc || u === ye.default.trueFunc ? u : function (r) { return e(r) || u(r); }; }
var qr = function (e, u) { return e === u; }, gn = { adapter: be, equals: qr };
function Ir(e) { var u, t, r, n; var i = e != null ? e : gn; return (u = i.adapter) !== null && u !== void 0 || (i.adapter = be), (t = i.equals) !== null && t !== void 0 || (i.equals = (n = (r = i.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && n !== void 0 ? n : qr), i; }
function Nt(e) { return function (t, r, n) { var i = Ir(r); return e(t, i, n); }; }
var Fa = Nt(Cr), Va = Nt(Nu), Du = Nt(Cu);
function Lr(e) { return function (t, r, n) { var i = Ir(n); typeof t != "function" && (t = Nu(t, i, r)); var a = qu(r, i.adapter, t.shouldTestNextSiblings); return e(t, a, i); }; }
function qu(e, u, t) {
    if (t === void 0) { t = !1; }
    return t && (e = mn(e, u)), Array.isArray(e) ? u.removeSubsets(e) : u.getChildren(e);
}
function mn(e, u) { var t = Array.isArray(e) ? e.slice(0) : [e], r = t.length; for (var n = 0; n < r; n++) {
    var i = Et(t[n], u);
    t.push.apply(t, __spreadArray([], __read(i), false));
} return t; }
var Ga = Lr(function (e, u, t) { return e === kt.default.falseFunc || !u || u.length === 0 ? [] : t.adapter.findAll(e, u); }), ja = Lr(function (e, u, t) { return e === kt.default.falseFunc || !u || u.length === 0 ? null : t.adapter.findOne(e, u); });
var Lu = Ne(Te(), 1);
var xn = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function We(e) { return e.type !== "pseudo" ? !1 : xn.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some(function (u) { return u.some(We); }) : !1; }
function Ur(e, u, t) { var r = u != null ? parseInt(u, 10) : NaN; switch (e) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt": return isFinite(r) ? r >= 0 ? Math.min(r, t) : 1 / 0 : 0;
    case "gt": return isFinite(r) ? 1 / 0 : 0;
    case "odd": return 2 * t;
    case "even": return 2 * t - 1;
    case "last":
    case "not": return 1 / 0;
} }
function Mr(e) { for (; e.parent;)
    e = e.parent; return e; }
function Iu(e) {
    var e_8, _a;
    var u = [], t = [];
    try {
        for (var e_9 = __values(e), e_9_1 = e_9.next(); !e_9_1.done; e_9_1 = e_9.next()) {
            var r = e_9_1.value;
            r.some(We) ? u.push(r) : t.push(r);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (e_9_1 && !e_9_1.done && (_a = e_9.return)) _a.call(e_9);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return [t, u];
}
var yn = { type: T.Universal, namespace: null }, vn = { type: T.Pseudo, name: "scope", data: null };
function qt(e, u, t) {
    if (t === void 0) { t = {}; }
    return Sn([e], u, t);
}
function Sn(e, u, t) {
    if (t === void 0) { t = {}; }
    if (typeof u == "function")
        return e.some(u);
    var _a = __read(Iu(Ee(u)), 2), r = _a[0], n = _a[1];
    return r.length > 0 && e.some(Du(r, t)) || n.some(function (i) { return Or(i, e, t).length > 0; });
}
function wn(e, u, t, r) { var n = typeof t == "string" ? parseInt(t, 10) : NaN; switch (e) {
    case "first":
    case "lt": return u;
    case "last": return u.length > 0 ? [u[u.length - 1]] : u;
    case "nth":
    case "eq": return isFinite(n) && Math.abs(n) < u.length ? [n < 0 ? u[u.length + n] : u[n]] : [];
    case "gt": return isFinite(n) ? u.slice(n + 1) : [];
    case "even": return u.filter(function (i, a) { return a % 2 === 0; });
    case "odd": return u.filter(function (i, a) { return a % 2 === 1; });
    case "not": {
        var i_1 = new Set(An(t, u, r));
        return u.filter(function (a) { return !i_1.has(a); });
    }
} }
function An(e, u, t) { if (u.length === 0)
    return []; var _a = __read(Iu(e), 2), r = _a[0], n = _a[1], i; if (r.length) {
    var a = Dt(u, r, t);
    if (n.length === 0)
        return a;
    a.length && (i = new Set(a));
} for (var a = 0; a < n.length && (i == null ? void 0 : i.size) !== u.length; a++) {
    var o = n[a];
    if ((i ? u.filter(function (v) { return H(v) && !i.has(v); }) : u).length === 0)
        break;
    var b = Or(o, u, t);
    if (b.length)
        if (i)
            b.forEach(function (v) { return i.add(v); });
        else {
            if (a === n.length - 1)
                return b;
            i = new Set(b);
        }
} return typeof i != "undefined" ? i.size === u.length ? u : u.filter(function (a) { return i.has(a); }) : []; }
function Or(e, u, t) { var r; if (e.some(De)) {
    var n = (r = t.root) !== null && r !== void 0 ? r : Mr(u[0]), i = ke(de({}, t), { context: u, relativeSelector: !1 });
    return e.push(vn), Uu(n, e, i, !0, u.length);
} return Uu(u, e, t, !1, u.length); }
function It(e, u, t, r) {
    if (t === void 0) { t = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof e == "function")
        return Br(u, e);
    var _a = __read(Iu(Ee(e)), 2), n = _a[0], i = _a[1], a = i.map(function (o) { return Uu(u, o, t, !0, r); });
    return n.length && a.push(Ct(u, n, t, r)), a.length === 0 ? [] : a.length === 1 ? a[0] : ht(a.reduce(function (o, h) { return __spreadArray(__spreadArray([], __read(o), false), __read(h), false); }));
}
function Uu(e, u, t, r, n) { var i = u.findIndex(We), a = u.slice(0, i), o = u[i], h = u.length - 1 === i ? n : 1 / 0, b = Ur(o.name, o.data, h); if (b === 0)
    return []; var D = (a.length === 0 && !Array.isArray(e) ? xu(e).filter(H) : a.length === 0 ? (Array.isArray(e) ? e : [e]).filter(H) : r || a.some(De) ? Ct(e, [a], t, b) : Dt(e, [a], t)).slice(0, b), A = wn(o.name, D, o.data, t); if (A.length === 0 || u.length === i + 1)
    return A; var E = u.slice(i + 1), q = E.some(De); if (q) {
    if (De(E[0])) {
        var M = E[0].type;
        (M === T.Sibling || M === T.Adjacent) && (A = qu(A, be, !0)), E.unshift(yn);
    }
    t = ke(de({}, t), { relativeSelector: !1, rootFunc: function (M) { return A.includes(M); } });
}
else
    t.rootFunc && t.rootFunc !== Lu.trueFunc && (t = ke(de({}, t), { rootFunc: Lu.trueFunc })); return E.some(We) ? Uu(A, E, t, !1, n) : q ? Ct(A, [E], t, n) : Dt(A, [E], t); }
function Ct(e, u, t, r) { var n = Du(u, t, e); return Br(e, n, r); }
function Br(e, u, t) {
    if (t === void 0) { t = 1 / 0; }
    var r = qu(e, be, u.shouldTestNextSiblings);
    return vu(function (n) { return H(n) && u(n); }, r, !0, t);
}
function Dt(e, u, t) { var r = (Array.isArray(e) ? e : [e]).filter(H); if (r.length === 0)
    return r; var n = Du(u, t); return n === Lu.trueFunc ? r : r.filter(n); }
function Hr(e) { var u = /^(?:([a-zA-Z][\w+.-]*):)?(?:\/\/([^/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?$/.exec(e) || []; return { scheme: u[1], auth: u[2], path: u[3] || "", query: u[4], frag: u[5] }; }
function Lt(e) { var u = [], t = e.split("/"); for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n === ".." ? (u.length > 1 && u.pop(), r === t.length - 1 && u.push("")) : n === "." ? r === t.length - 1 && u.push("") : u.push(n);
} return u.join("/"); }
function Ou(e, u) { u = u == null ? "" : String(u).trim(); var t = Hr(u); if (t.scheme || !e)
    return u; var r = Hr(String(e)); if (!r.scheme)
    return u; var n = r.auth, i, a; if (t.auth !== void 0)
    n = t.auth, i = Lt(t.path), a = t.query;
else if (!t.path)
    i = r.path, a = t.query !== void 0 ? t.query : r.query;
else {
    if (t.path.charAt(0) === "/")
        i = Lt(t.path);
    else {
        var o = n !== void 0 && !r.path ? "/" : r.path.slice(0, r.path.lastIndexOf("/") + 1);
        i = Lt(o + t.path);
    }
    a = t.query;
} return n !== void 0 && i.charAt(0) !== "/" && (i = "/" + i), r.scheme + ":" + (n !== void 0 ? "//" + n : "") + i + (a !== void 0 ? "?" + a : "") + (t.frag !== void 0 ? "#" + t.frag : ""); }
var Mu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Rr(e) { if (typeof btoa == "function")
    return btoa(e); var u = ""; for (var t = 0; t < e.length; t += 3) {
    var r = e.charCodeAt(t), n = e.charCodeAt(t + 1), i = e.charCodeAt(t + 2), a = r << 16 | (n || 0) << 8 | (i || 0);
    u += Mu[a >> 18 & 63] + Mu[a >> 12 & 63] + (t + 1 < e.length ? Mu[a >> 6 & 63] : "=") + (t + 2 < e.length ? Mu[a & 63] : "=");
} return u; }
var En = function (e, u, t) { return It(e, u, t); }, Gr = function (e, u, t) { return It(e, u, t, 1)[0] || null; }, jr = /[\s ]+/g, Pr = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), Tn = { containsOwn: function (e, u) { return Mt(e).toLowerCase().includes(String(u).toLowerCase()); }, matches: function (e, u) { return Fr(u).test(Ut(e)); }, matchesOwn: function (e, u) { return Fr(u).test(Mt(e)); }, containsData: function (e, u) { return we(e).includes(u); }, "contains-ci": function (e, u) { return Ut(e).toLowerCase().includes(String(u).toLowerCase()); } };
function Fr(e) { try {
    return new RegExp(e);
}
catch (u) {
    return /$^/;
} }
var Bu = { pseudos: Tn, xmlMode: !1, lowerCaseTags: !0 };
function Hu(e) { return String(e).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function Ut(e) { if (!e)
    return ""; if (e.type === "text")
    return e.data; var u = "", t = function (r) {
    var e_10, _a;
    try {
        for (var _b = __values(r.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var n = _c.value;
            n.type === "text" ? u += n.data : (n.type === "tag" || n.type === "script" || n.type === "style") && (n.name === "br" ? u += " " : n.type === "tag" && (Pr.has(n.name) && (u += " "), t(n), Pr.has(n.name) && (u += " ")));
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_10) throw e_10.error; }
    }
}; return t(e), u.replace(jr, " ").trim(); }
function Mt(e) {
    var e_11, _a;
    var u = "";
    try {
        for (var _b = __values(e.children || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            t.type === "text" && (u += t.data);
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return u.replace(jr, " ").trim();
}
function zr(e, u) { if (!u)
    return ""; try {
    return Ou(e, u);
}
catch (t) {
    return e ? "" : u;
} }
var Ie = (function () {
    function e(u, t) {
        this.node = u, this.doc = t;
    }
    Object.defineProperty(e.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    e.prototype.select = function (u) { return pe.of(En(Hu(u), this.node, Bu), this.doc); };
    e.prototype.selectFirst = function (u) { var t = Gr(Hu(u), this.node, Bu); return t ? new e(t, this.doc) : null; };
    e.prototype.is = function (u) { return qt(this.node, Hu(u), Bu); };
    e.prototype.text = function () { return Ut(this.node); };
    e.prototype.ownText = function () { return Mt(this.node); };
    e.prototype.wholeText = function () { return we(this.node); };
    e.prototype.data = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return u.data; }).join(""); };
    e.prototype.html = function () { return (this.node.children || []).map(function (u) { return Ge(u, { decodeEntities: !1 }); }).join("").trim(); };
    e.prototype.outerHtml = function () { return Ge(this.node, { decodeEntities: !1 }); };
    e.prototype.toString = function () { return this.outerHtml(); };
    e.prototype.tagName = function () { return this.node.name || ""; };
    e.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    e.prototype.id = function () { return this.attr("id"); };
    e.prototype.className = function () { return this.attr("class"); };
    e.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    e.prototype.hasClass = function (u) { return this.classNames().includes(u); };
    e.prototype.attr = function (u, t) { if (t !== void 0)
        return this.node.attribs && (this.node.attribs[u] = String(t)), this; if (!this.node.attribs)
        return ""; if (u.startsWith("abs:"))
        return zr(this.baseUri, this.node.attribs[u.slice(4)] || ""); var r = this.node.attribs[u]; return r == null ? "" : r; };
    e.prototype.absUrl = function (u) { return this.attr("abs:" + u); };
    e.prototype.hasAttr = function (u) { return !!(this.node.attribs && (u.startsWith("abs:") ? u.slice(4) : u) in this.node.attribs); };
    e.prototype.removeAttr = function (u) { return this.node.attribs && delete this.node.attribs[u], this; };
    e.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    e.prototype.dataset = function () {
        var e_12, _a;
        var u = {};
        try {
            for (var _b = __values(Object.entries(this.node.attribs || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), t = _d[0], r = _d[1];
                t.startsWith("data-") && (u[t.slice(5)] = r);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return u;
    };
    e.prototype.val = function () { return this.attr("value"); };
    e.prototype.parent = function () { var u = this.node.parent; return u && u.type !== "root" ? new e(u, this.doc) : null; };
    e.prototype.parents = function () { var u = [], t = this.node.parent; for (; t && t.type !== "root";)
        u.push(t), t = t.parent; return pe.of(u, this.doc); };
    e.prototype.closest = function (u) { var t = this.node; for (; t && t.type !== "root";) {
        if (t.type === "tag" && qt(t, Hu(u), Bu))
            return new e(t, this.doc);
        t = t.parent;
    } return null; };
    e.prototype.children = function () { return pe.of((this.node.children || []).filter(H), this.doc); };
    e.prototype.child = function (u) { var t = (this.node.children || []).filter(H)[u]; return t ? new e(t, this.doc) : null; };
    e.prototype.childrenSize = function () { return (this.node.children || []).filter(H).length; };
    e.prototype.nextElementSibling = function () { var u = ot(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.previousElementSibling = function () { var u = lt(this.node); return u ? new e(u, this.doc) : null; };
    e.prototype.siblingElements = function () {
        var _this = this;
        return pe.of(yu(this.node).filter(function (u) { return u !== _this.node && H(u); }), this.doc);
    };
    e.prototype.elementSiblingIndex = function () { return yu(this.node).filter(H).indexOf(this.node); };
    e.prototype.getElementsByTag = function (u) { return this.select(u); };
    e.prototype.getElementsByClass = function (u) { return this.select("." + u); };
    e.prototype.getElementById = function (u) { return this.selectFirst("#" + u); };
    e.prototype.remove = function () { return xe(this.node), this; };
    e.prototype.empty = function () { return this.node.children = [], this; };
    e.prototype.textNodes = function () { return (this.node.children || []).filter(function (u) { return u.type === "text"; }).map(function (u) { return ({ text: function () { return u.data; }, toString: function () { return u.data; } }); }); };
    e.prototype.title = function () { var u = this.selectFirst("title"); return u ? u.text() : ""; };
    e.prototype.body = function () { return this.selectFirst("body") || this; };
    e.prototype.head = function () { return this.selectFirst("head") || this; };
    e.prototype.location = function () { return this.baseUri; };
    return e;
}()), Bt = Object.create(Array.prototype), pe = { of: Ot, prototype: Bt };
function Ot(e, u) {
    var e_13, _a;
    var t = [];
    try {
        for (var _b = __values(e || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var r = _c.value;
            t.push(r instanceof Ie ? r : new Ie(r, u));
        }
    }
    catch (e_13_1) { e_13 = { error: e_13_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_13) throw e_13.error; }
    }
    return Object.setPrototypeOf(t, Bt), t;
}
var Vr = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (e) { return this[e] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (e) { return pe.of(this[e] ? [this[e]] : [], null); }, text: function () { return this.map(function (e) { return e.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (e) { return e.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (e) { return e.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (e) { return e.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (e, u) {
        var e_14, _a;
        if (u !== void 0)
            return this.forEach(function (t) { return t.attr(e, u); }), this;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var t = _c.value;
                if (t.hasAttr(e))
                    return t.attr(e);
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_14) throw e_14.error; }
        }
        return "";
    }, eachAttr: function (e) { return this.filter(function (u) { return u.hasAttr(e); }).map(function (u) { return u.attr(e); }); }, hasAttr: function (e) { return this.some(function (u) { return u.hasAttr(e); }); }, hasClass: function (e) { return this.some(function (u) { return u.hasClass(e); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (e) {
        var e_15, _a, e_16, _b;
        var u = Ot([]), t = new Set;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var r = _d.value;
                try {
                    for (var _f = (e_16 = void 0, __values(r.select(e))), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var n = _g.value;
                        t.has(n.node) || (t.add(n.node), u.push(n));
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return u;
    }, selectFirst: function (e) {
        var e_17, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                var t = u.selectFirst(e);
                if (t)
                    return t;
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return null;
    }, is: function (e) { return this.some(function (u) { return u.is(e); }); }, not: function (e) { return pe.of(this.filter(function (u) { return !u.is(e); }), null); }, parents: function () {
        var e_18, _a;
        var e = Ot([]);
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var u = _c.value;
                e.push.apply(e, __spreadArray([], __read(u.parents()), false));
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_18) throw e_18.error; }
        }
        return e;
    }, next: function () { return pe.of(this.map(function (e) { return e.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return pe.of(this.map(function (e) { return e.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (e) { return e.remove(); }), this; }, empty: function () { return this.forEach(function (e) { return e.empty(); }), this; }, removeAttr: function (e) { return this.forEach(function (u) { return u.removeAttr(e); }), this; } };
try {
    for (var _b = __values(Object.keys(Vr)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var e = _c.value;
        Object.defineProperty(Bt, e, { value: Vr[e], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}
function Ru(e, u) { var t = br(String(e == null ? "" : e), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new Ie(t, null); r.doc = r, r.__base = u || ""; var n = Gr("base[href]", t); return n && n.attribs.href && (r.__base = zr(r.__base, n.attribs.href)), r; }
function $r(e, u) { var t = new Set((u || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = Ru(e), n = function (i) {
    var e_19, _a, e_20, _b;
    try {
        for (var _c = __values((i.children || []).slice()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var a = _d.value;
            if (a.type === "script" || a.type === "style" || a.type === "comment") {
                xe(a);
                continue;
            }
            if (a.type === "tag" && (n(a), !t.has(a.name))) {
                var o = (a.children || []).slice();
                try {
                    for (var o_3 = (e_20 = void 0, __values(o)), o_3_1 = o_3.next(); !o_3_1.done; o_3_1 = o_3.next()) {
                        var h = o_3_1.value;
                        ft(a, h);
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (o_3_1 && !o_3_1.done && (_b = o_3.return)) _b.call(o_3);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
                xe(a);
            }
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_19) throw e_19.error; }
    }
}; return n(r.node), Ge(r.node.children, { decodeEntities: !1 }); }
var su = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function kn(e) { if (typeof Buffer != "undefined")
    return Buffer.from(e).toString("base64"); var u = ""; for (var t = 0; t < e.length; t++)
    u += String.fromCharCode(e[t]); return Rr(u); }
function Wr(e) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(e) : Uint8Array.from(unescape(encodeURIComponent(e)), function (u) { return u.charCodeAt(0); }); }
function Nn(e) { var u = ""; for (var t = 0; t < e.length; t++) {
    var r = e.charCodeAt(t);
    if (r < 128) {
        u += e[t];
        continue;
    }
    if (r === 128) {
        u += "€";
        continue;
    }
    var n = e.charCodeAt(t + 1);
    r >= 129 && r <= 254 && n >= 64 && n <= 254 && n !== 127 ? (u += __GBK_TABLE[(r - 129) * 190 + (n - 64) - (n > 127 ? 1 : 0)], t++) : u += "�";
} return u; }
var Ht = (function () {
    function Ht(u, t) {
        this.status = u.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = u.statusText || String(this.status), this.url = u.url || t.url, this.headers = u.headers || {}, this._raw = u, this.request = { url: t.url, headers: t.headers || {} };
    }
    Ht.prototype.header = function (u) { var t = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(u).toLowerCase(); }); return t ? this.headers[t] : ""; };
    Ht.prototype.text = function (u) { if (u && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(u).toLowerCase()).decode(this._raw.bytes);
        }
        catch (r) { } var t = this._raw.text == null ? "" : String(this._raw.text); return u || (u = (String(this.header("content-type") || "").match(/charset=([\w-]+)/i) || [])[1]), u && /^(gbk|gb2312|gb18030)$/i.test(String(u)) && typeof __GBK_TABLE == "string" && /[\x80-\xff]/.test(t) && !/[^\x00-\xff]/.test(t) ? Nn(t) : t; };
    Ht.prototype.string = function (u) { return this.text(u); };
    Ht.prototype.html = function (u) { return Ru(this.text(u), this.url); };
    Ht.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (u) {
        return null;
    } };
    Ht.prototype.base64 = function () { return kn(this._raw.bytes || Wr(this.text())); };
    Ht.prototype.blob = function () { var u = this; return { size: (this._raw.bytes || Wr(this.text())).length, type: this.header("content-type"), base64: function () { return u.base64(); } }; };
    return Ht;
}());
function Cn(e) {
    var e_21, _a;
    var u = {};
    if (!e)
        return u;
    if (typeof e.forEach == "function" && !Array.isArray(e) && typeof e.entries == "function")
        return e.forEach(function (t, r) { u[r] = t; }), u;
    try {
        for (var _b = __values(Object.keys(e)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var t = _c.value;
            u[t] = String(e[t]);
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return u;
}
function Qr(e, u) { var t = function (a) { return ({ getItem: function (o) { var h = e.storageGet(a + o); return h == null ? null : h; }, setItem: function (o, h) { return e.storageSet(a + o, h == null ? null : String(h)); }, removeItem: function (o) { return e.storageSet(a + o, null); }, clear: function () { return e.storageClear && e.storageClear(a); } }); }, r = "__cookie__", n = {}; n.Response = { success: function (a, o) { return ({ code: 0, data: a === void 0 ? null : a, data2: o === void 0 ? null : o }); }, error: function (a) { return ({ code: 1, data: a == null ? "" : String(a) }); } }, n.fetch = function (o, h) {
    return __awaiter(this, void 0, void 0, function () { var b, M, v, D, A, M, E, q, M_1; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                h = h || {};
                b = String(o);
                if (h.queries) {
                    M = Object.entries(h.queries).map(function (_a) {
                        var _b = __read(_a, 2), J = _b[0], ee = _b[1];
                        return encodeURIComponent(J) + "=" + encodeURIComponent(ee);
                    }).join("&");
                    M && (b += (b.includes("?") ? "&" : "?") + M);
                }
                v = Object.assign({ "User-Agent": su }, Cn(h.headers)), D = e.storageGet(r);
                D && !Object.keys(v).some(function (M) { return M.toLowerCase() === "cookie"; }) && (v.Cookie = D);
                A = h.body;
                if (A != null && typeof A == "object") {
                    M = Object.keys(v).find(function (J) { return J.toLowerCase() === "content-type"; });
                    M && /json/i.test(v[M]) ? A = JSON.stringify(A) : (A = Object.entries(A).map(function (_a) {
                        var _b = __read(_a, 2), J = _b[0], ee = _b[1];
                        return encodeURIComponent(J) + "=" + encodeURIComponent(ee);
                    }).join("&"), M || (v["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                E = { url: b, method: (h.method || (A != null ? "POST" : "GET")).toUpperCase(), headers: v, body: A, timeout: h.timeout };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, e.request(E)];
            case 2:
                q = _a.sent();
                return [3, 4];
            case 3:
                M_1 = _a.sent();
                q = { status: 0, url: b, headers: {}, text: "", error: String(M_1 && M_1.message || M_1) };
                return [3, 4];
            case 4: return [2, new Ht(q, E)];
        }
    }); });
}, n.Http = { get: function (a) { return Kr(n, "GET", a); }, post: function (a) { return Kr(n, "POST", a); } }, n.Html = { parse: function (a, o) { return Ru(a, o || ""); }, clean: function (a, o) { return $r(a, o); } }, n.localStorage = t("ls:"), n.cacheStorage = t("cs:"), n.localConfig = { getItem: function (a) { return e.config(a); } }, n.localCookie = { setCookie: function (a) { e.storageSet(r, String(a).split(";")[0]); }, getCookie: function () { return e.storageGet(r) || ""; } }, n.sleep = function (a) { return new Promise(function (o) { return typeof setTimeout == "function" ? setTimeout(o, Math.min(Number(a) || 0, 1e4)) : o(); }); }; var i = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    try {
        e.log && e.log(a.map(function (o) { return typeof o == "string" ? o : JSON.stringify(o); }).join(" "));
    }
    catch (o) { }
}; return n.Log = { log: i }, n.console = { log: i, error: i, warn: i, info: i }, n.Console = n.console, n.log = i, n.UserAgent = { system: function () { return su; }, chrome: function () { return su; }, android: function () { return su; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, n.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (e.name || "host") + ")"); } }, n.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, n.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, n.Elements = pe, n.Element = Ie, n.__meta = u, n; }
function Kr(e, u, t) { var r = { method: u, url: t, headers: {}, body: void 0, queries: void 0 }, n = { headers: function (i) { return Object.assign(r.headers, i || {}), n; }, header: function (i, a) { return r.headers[i] = a, n; }, params: function (i) { return r.queries = i, n; }, queries: function (i) { return r.queries = i, n; }, body: function (i) { return r.body = i, n; }, html: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).html(i)];
            }
        }); });
    }, string: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, text: function (i) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).text(i)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, e.fetch(r.url, r)];
                case 1: return [2, (_a.sent()).json()];
            }
        }); });
    } }; return n; }
function Le(e, u) { if (!u)
    return ""; if (u = String(u).trim(), /^data:|^blob:/.test(u))
    return u; if (u.startsWith("//"))
    return "https:" + u; if (typeof __abs == "function")
    return __abs(e, u); try {
    return Ou(e, u);
}
catch (t) {
    return u;
} }
var j = function (e) { return e == null ? "" : String(e); }, Dn = function (e) { return e.filter(function (u, t) { return u && e.indexOf(u) === t; }); }, Pu = (function () {
    function class_1(u) {
        var t = u.meta, r = u.scripts, n = u.host;
        this.meta = t, this.host = n, this.env = u.env || Qr(n, t), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return j(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (u) { return !!this.scripts[u]; };
    class_1.prototype.run = function (u) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, n, i, a;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.scripts[u];
                        if (!r)
                            throw new Error("script " + u + " missing");
                        n = function (o) { var h = _this.host.config(o); return h == null ? (_this.meta.configDefaults || {})[o] : h; };
                        return [4, r(this.env, n)];
                    case 1:
                        i = _a.sent();
                        if (typeof i != "function")
                            throw new Error(u + ": execute() not defined");
                        return [4, i.apply(void 0, __spreadArray([], __read(t.map(j)), false))];
                    case 2:
                        a = _a.sent();
                        if (!a)
                            throw new Error(u + ": empty result");
                        if (a.code !== 0)
                            throw new Error(u + ": " + j(a.data || "error"));
                        return [2, a];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (u) { return j(u).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var u, _a, t_1, t_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    u = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    _a = this.has("home");
                    if (!_a) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _a = (u = (_b.sent()).data || []);
                    _b.label = 3;
                case 3:
                    _a;
                    return [3, 5];
                case 4:
                    t_1 = _b.sent();
                    this.host.log && this.host.log("home: " + t_1.message);
                    return [3, 5];
                case 5:
                    if (!(!u.length && this.has("genre"))) return [3, 9];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    u = ((_b.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    t_2 = _b.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = u.filter(function (t) { return t && t.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (u, t, r) {
        return __awaiter(this, void 0, void 0, function () {
            var n, i, a, o, h;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = u + "|" + t;
                        r = Math.max(1, r | 0);
                        i = r === 1 ? "" : this.tokens[n + "|" + r];
                        if (r > 1 && i == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(u, t, i)];
                    case 1:
                        a = _a.sent(), o = j(a.data2);
                        o && (this.tokens[n + "|" + (r + 1)] = o);
                        h = (a.data || []).filter(Boolean).map(function (b) { return ({ name: j(b.name).trim(), link: Le(b.host || _this.base + "/", b.link), cover: Le(b.host || _this.base + "/", b.cover), description: j(b.description), tag: j(b.tag) }); }).filter(function (b) { return b.name && b.link; });
                        return [2, { items: h, hasNext: !!o && h.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent();
                    return [2, t[0] ? this.list(this.scriptFile(t[0].script), j(t[0].input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.latest = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    t = _a.sent(), r = t[1] || t[0];
                    return [2, r ? this.list(this.scriptFile(r.script), j(r.input), u) : this.search("", u)];
            }
        }); });
    };
    class_1.prototype.search = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, this.has("search") ? this.list("search", u, t) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("detail", u)];
                case 1:
                    t = (_a.sent()).data || {}, r = [].concat(t.genres || [], t.tags || []).map(function (n) { return typeof n == "string" ? n : n && n.title; }).filter(Boolean);
                    return [2, { name: j(t.name).trim(), cover: Le(t.host || this.base + "/", t.cover), author: j(t.author).trim(), description: Zr(j(t.description)), detail: Zr(j(t.detail)), ongoing: t.ongoing !== !1 && t.ongoing !== "false", genres: Dn(r.map(function (n) { return String(n).trim(); })), url: u, format: j(t.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, r, r_1, r_1_1, n, _a, _b, e_22_1, _c;
            var e_22, _d;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        t = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", u)];
                    case 1:
                        r = (_f.sent()).data || [u];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _f.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        n = r_1_1.value;
                        _b = (_a = t).concat;
                        return [4, this.run("toc", j(n))];
                    case 4:
                        t = _b.apply(_a, [(_f.sent()).data || []]);
                        _f.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_22_1 = _f.sent();
                        e_22 = { error: e_22_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_d = r_1.return)) _d.call(r_1);
                        }
                        finally { if (e_22) throw e_22.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _c = this.has("toc");
                        if (!_c) return [3, 12];
                        return [4, this.run("toc", u)];
                    case 11:
                        _c = (t = (_f.sent()).data || []);
                        _f.label = 12;
                    case 12:
                        _c;
                        _f.label = 13;
                    case 13: return [2, t.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, n) { return ({ name: j(r.name).trim() || "#" + (n + 1), url: Le(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _a, _b, r, n;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", u)];
                    case 1:
                        _a = t = (_c.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", u)];
                    case 3:
                        _b = t = (_c.sent()).data;
                        return [3, 5];
                    case 4:
                        _b = t = [u];
                        _c.label = 5;
                    case 5:
                        _a = _b;
                        _c.label = 6;
                    case 6:
                        _a, typeof t == "string" && (t = t.split(/[\n,]+/));
                        r = function (i) { return !i || /^data:|loading|lazy|blank|placeholder|spacer|\/nocover|1x1\./i.test(String(i)); }, n = function (i) { if (typeof i == "string")
                            return i; if (!i)
                            return ""; var a = i.link || i.url || i.data, o = Array.isArray(i.fallback) ? i.fallback.filter(Boolean) : []; return r(a) && o.length ? o[0] : a; };
                        return [2, (t || []).map(function (i) { return Le(_this.base + "/", n(i)); }).filter(Boolean)];
                }
            });
        });
    };
    class_1.prototype.content = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.run("chap", u)];
                case 1:
                    t = _a.sent();
                    return [2, { html: j(t.data), title: j(t.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var t, n, r, t_3, t_3_1, n, i, a, a_2, a_2_1, o, i_2, e_23_1;
            var e_23, _a, e_24, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        t = [{ title: "Default", data: u }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", u)];
                    case 1:
                        n = (_c.sent()).data;
                        Array.isArray(n) && n.length && (t = n.map(function (i) { return typeof i == "string" ? { title: "Server", data: i } : { title: j(i.title || i.name || "Server"), data: j(i.data || i.url || i.link) }; }));
                        _c.label = 2;
                    case 2:
                        r = [];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 10, 11, 12]);
                        t_3 = __values(t), t_3_1 = t_3.next();
                        _c.label = 4;
                    case 4:
                        if (!!t_3_1.done) return [3, 9];
                        n = t_3_1.value;
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4, this.run("track", n.data)];
                    case 6:
                        i = (_c.sent()).data || {}, a = Array.isArray(i) ? i : [i];
                        try {
                            for (a_2 = (e_24 = void 0, __values(a)), a_2_1 = a_2.next(); !a_2_1.done; a_2_1 = a_2.next()) {
                                o = a_2_1.value;
                                !o || !o.data || o.type !== "webview" && r.push({ url: Le(o.host || this.base + "/", o.data), quality: n.title + (o.quality ? " " + o.quality : ""), headers: o.headers || { Referer: this.base + "/" }, subtitles: (o.subtitles || (o.subtitle ? [{ data: o.subtitle, label: "Sub" }] : [])).map(function (h) { return ({ file: Le(_this.base + "/", h.data || h.file), label: j(h.label || h.language || "Sub") }); }), mimeType: j(o.mimeType) });
                            }
                        }
                        catch (e_24_1) { e_24 = { error: e_24_1 }; }
                        finally {
                            try {
                                if (a_2_1 && !a_2_1.done && (_b = a_2.return)) _b.call(a_2);
                            }
                            finally { if (e_24) throw e_24.error; }
                        }
                        return [3, 8];
                    case 7:
                        i_2 = _c.sent();
                        this.host.log && this.host.log("track " + n.title + ": " + i_2.message);
                        return [3, 8];
                    case 8:
                        t_3_1 = t_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_23_1 = _c.sent();
                        e_23 = { error: e_23_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (t_3_1 && !t_3_1.done && (_a = t_3.return)) _a.call(t_3);
                        }
                        finally { if (e_23) throw e_23.error; }
                        return [7];
                    case 12: return [2, r];
                }
            });
        });
    };
    return class_1;
}());
function Zr(e) {
    return String(e).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
var ve = { id: "truyendichai", name: "TruyenDich.AI", source: "https://truyendich.store", type: "novel", locale: "vi_VN", nsfw: !1, version: 5, config: { DOMAIN: { title: "Domain", default: "https://truyendich.store", mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://truyendich.store" }, itemType: 2, lnId: "kiritokmn.truyendichai", lnIcon: "", lnVersion: "1.1.5" }, Xr = { home: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, o, h, b, v, D, A, E, q, M, J, ee, ce) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                F = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function U() {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                return [2, i.success([{ title: "Truyện Hot", input: "list:truyen-hot", script: "gen.js" }, { title: "Truyện Mới", input: "list:truyen-moi", script: "gen.js" }, { title: "Truyện Full", input: "list:truyen-full", script: "gen.js" }, { title: "Truyện Convert", input: "list:truyen-convert", script: "gen.js" }, { title: "Truyện Dịch", input: "list:truyen-dich", script: "gen.js" }, { title: "Truyện Dịch AI", input: "list:truyen-dich-ai", script: "gen.js" }])];
                                            }); });
                                        } return __generator(this, function (_a) {
                                            return [2, typeof U == "function" ? U : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, genre: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, o, h, b, v, D, A, E, q, M, J, ee, ce) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                F = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(s) { return s == null ? "" : String(s).trim(); } function C(s) { return L(s).replace(/\s+/g, " "); } function I(s) { return L(s).replace(/^\/+|\/+$/g, ""); } function V(s) { return s = L(s), !s || (s = s.replace(/^[a-z]+:\/\/[^/]+/i, ""), s = s.replace(/[?#].*$/, ""), !s) ? "" : (s.charAt(0) !== "/" && (s = "/" + s), s.length > 1 && (s = s.replace(/\/+$/, "")), s); } function G(s) { return s = C(s).toLowerCase(), s === "ai" ? "ai" : s === "convert" || s === "cv" ? "convert" : "base"; } function ue(s) { return s = G(s), s === "ai" ? "Dịch AI" : s === "convert" ? "Convert" : "Bản Dịch"; } function z(s) { var g = V(s); if (!g || g.indexOf("/doc-truyen/") !== 0)
                                            return null; var l = g.substring(12).split("/").filter(Boolean), f = "base"; l[0] === "ai" ? (f = "ai", l.shift()) : l[0] === "cv" && (f = "convert", l.shift()); var c = I(l.shift()); if (!c)
                                            return null; var p = { edition: f, slug: c, kind: "detail", pageNo: 1, chapterSegment: "" }; return l.length === 0 ? p : /^trang-\d+$/.test(l[0]) ? (p.kind = "page", p.pageNo = parseInt(l[0].replace("trang-", ""), 10) || 1, p) : (p.kind = "chapter", p.chapterSegment = I(l.join("/")), p); } function W(s) { if (!s || !s.slug)
                                            return ""; var g = "/doc-truyen", l = G(s.edition); if (l === "ai" && (g += "/ai"), l === "convert" && (g += "/cv"), g += "/" + I(s.slug), s.kind === "page") {
                                            var f = parseInt(s.pageNo, 10) || 1;
                                            return f > 1 && (g += "/trang-" + f), g;
                                        } return s.kind === "chapter" && s.chapterSegment && (g += "/" + I(s.chapterSegment)), g; } function P(s) { return s ? W({ edition: s.edition, slug: s.slug, kind: "detail" }) : ""; } function Y(s) { return s = L(s), s ? /^https?:\/\//i.test(s) ? s : U + V(s) : ""; } function re(s, g) { var l = [], f = {}, c = g && g.slug ? I(g.slug) : ""; return s.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (p) { var m = z(p.attr("href")); if (!(!m || m.kind !== "detail") && !(c && m.slug !== c)) {
                                            var y = P(m), w = C(p.text()) || ue(m.edition), k = f[y];
                                            if (k != null) {
                                                w.length > l[k].title.length && (l[k].title = w);
                                                return;
                                            }
                                            f[y] = l.length, l.push({ title: w, route: m, key: y });
                                        } }), l; } function ge(s, g) { var l = [], f = P(g); return re(s, g).forEach(function (c) { !c || c.key === f || l.push(c); }), l; } function S(s, g) { return { title: s, input: "category:" + g, script: "gen.js" }; } function d() {
                                            return __awaiter(this, void 0, void 0, function () { var s, g, l, f; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4, t(U + "/the-loai")];
                                                    case 1:
                                                        s = _a.sent();
                                                        if (s.ok) {
                                                            g = s.html(), l = [], f = {};
                                                            if (g.select("a[href^=/the-loai/]").forEach(function (c) { var p = V(c.attr("href")), m = p.match(/^\/the-loai\/([^/?#]+)/), y = C(c.text()); !m || !y || f[m[1]] || (f[m[1]] = !0, l.push(S(y, m[1]))); }), l.length > 0)
                                                                return [2, i.success(l)];
                                                        }
                                                        return [2, i.success(K.map(function (c) { return S(c[0], c[1]); }))];
                                                }
                                            }); });
                                        } var U, K; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                F && (U = F);
                                            }
                                            catch (s) { }
                                            K = [["Tiên Hiệp", "tien-hiep"], ["Kiếm Hiệp", "kiem-hiep"], ["Ngôn Tình", "ngon-tinh"], ["Đô Thị", "do-thi"], ["Huyền Huyễn", "huyen-huyen"], ["Võng Du", "vong-du"], ["Khoa Huyễn", "khoa-huyen"], ["Hệ Thống", "he-thong"], ["Dị Giới", "di-gioi"], ["Lịch Sử", "lich-su"], ["Quân Sự", "quan-su"], ["Trinh Thám", "trinh-tham"], ["Thám Hiểm", "tham-hiem"], ["Linh Dị", "linh-di"], ["Mạt Thế", "mat-the"], ["Xuyên Nhanh", "xuyen-nhanh"], ["Nữ Cường", "nu-cuong"], ["Cung Đấu", "cung-dau"], ["Đam Mỹ", "dam-my"], ["Bách Hợp", "bach-hop"]];
                                            return [2, typeof d == "function" ? d : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, detail: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, o, h, b, v, D, A, E, q, M, J, ee, ce) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                F = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(c) { return c == null ? "" : String(c).trim(); } function C(c) { return L(c).replace(/\s+/g, " "); } function I(c) { return L(c).replace(/^\/+|\/+$/g, ""); } function V(c) { return c = L(c), !c || (c = c.replace(/^[a-z]+:\/\/[^/]+/i, ""), c = c.replace(/[?#].*$/, ""), !c) ? "" : (c.charAt(0) !== "/" && (c = "/" + c), c.length > 1 && (c = c.replace(/\/+$/, "")), c); } function G(c) { return c = C(c).toLowerCase(), c === "ai" ? "ai" : c === "convert" || c === "cv" ? "convert" : "base"; } function ue(c) { return c = G(c), c === "ai" ? "Dịch AI" : c === "convert" ? "Convert" : "Bản Dịch"; } function z(c) { var p = V(c); if (!p || p.indexOf("/doc-truyen/") !== 0)
                                            return null; var m = p.substring(12).split("/").filter(Boolean), y = "base"; m[0] === "ai" ? (y = "ai", m.shift()) : m[0] === "cv" && (y = "convert", m.shift()); var w = I(m.shift()); if (!w)
                                            return null; var k = { edition: y, slug: w, kind: "detail", pageNo: 1, chapterSegment: "" }; return m.length === 0 ? k : /^trang-\d+$/.test(m[0]) ? (k.kind = "page", k.pageNo = parseInt(m[0].replace("trang-", ""), 10) || 1, k) : (k.kind = "chapter", k.chapterSegment = I(m.join("/")), k); } function W(c) { if (!c || !c.slug)
                                            return ""; var p = "/doc-truyen", m = G(c.edition); if (m === "ai" && (p += "/ai"), m === "convert" && (p += "/cv"), p += "/" + I(c.slug), c.kind === "page") {
                                            var y = parseInt(c.pageNo, 10) || 1;
                                            return y > 1 && (p += "/trang-" + y), p;
                                        } return c.kind === "chapter" && c.chapterSegment && (p += "/" + I(c.chapterSegment)), p; } function P(c) { return c ? W({ edition: c.edition, slug: c.slug, kind: "detail" }) : ""; } function Y(c) { return c = L(c), c ? /^https?:\/\//i.test(c) ? c : U + V(c) : ""; } function re(c, p) { var m = [], y = {}, w = p && p.slug ? I(p.slug) : ""; return c.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (k) { var B = z(k.attr("href")); if (!(!B || B.kind !== "detail") && !(w && B.slug !== w)) {
                                            var Q = P(B), ne = C(k.text()) || ue(B.edition), Ue = y[Q];
                                            if (Ue != null) {
                                                ne.length > m[Ue].title.length && (m[Ue].title = ne);
                                                return;
                                            }
                                            y[Q] = m.length, m.push({ title: ne, route: B, key: Q });
                                        } }), m; } function ge(c, p) { var m = [], y = P(p); return re(c, p).forEach(function (w) { !w || w.key === y || m.push(w); }), m; } function K(c) { return c ? C(c.text()) : ""; } function S(c) { return c ? c.html() : ""; } function d(c, p) { var m = c.select("div:has(> div > span:contains(" + p + ")) > p").first(); return m ? C(m.text()) : ""; } function s(c) { var p = [], m = {}; return c.select("a[href^=/the-loai/]").forEach(function (y) { var w = V(y.attr("href")), k = w.match(/^\/the-loai\/([^/?#]+)/), B = C(y.text()); !k || !B || m[k[1]] || (m[k[1]] = !0, p.push({ title: B, input: "category:" + k[1], script: "gen.js" })); }), p; } function g(c, p) { return ge(c, p).length === 0 ? [] : [{ title: "Các bản dịch khác", input: P(p), script: "edition.js" }]; } function l(c, p, m, y, w, k) { var B = ["Tên truyện: " + p, "Tác giả: " + (m || "Không rõ")]; return y && B.push("Số chương: " + y), w && B.push("Cập nhật: " + w), k && B.push("Trạng thái: " + k), B.push("Phiên bản: " + ue(c.edition)), B.join("<br>"); } function f(c) {
                                            return __awaiter(this, void 0, void 0, function () { var p, m, y, w, k, B, Q, ne, Ue; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        p = z(c);
                                                        if (!p)
                                                            return [2, i.error("URL truyện không hợp lệ.")];
                                                        m = P(p);
                                                        return [4, t(Y(m))];
                                                    case 1:
                                                        y = _a.sent();
                                                        if (!y.ok)
                                                            return [2, i.error("HTTP " + y.status)];
                                                        w = y.html(), k = d(w, "Số chương"), B = d(w, "Cập nhật"), Q = d(w, "Trạng thái"), ne = K(w.select("main header h1").first()), Ue = d(w, "Tác giả");
                                                        return [2, i.success({ name: ne, cover: Y(w.select("main header img").attr("src")), host: U, author: Ue, description: S(w.select("section .prose").first()), detail: l(p, ne, Ue, k, B, Q), url: Y(m), type: "novel", format: "novel", ongoing: Q.indexOf("Đang ra") >= 0, nsfw: !1, locale: "vi_VN", tags: s(w), genres: [], suggests: g(w, p), reviews: [], comments: [] })];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                F && (U = F);
                                            }
                                            catch (c) { }
                                            return [2, typeof f == "function" ? f : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, search: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, o, h, b, v, D, A, E, q, M, J, ee, ce) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                F = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(d) { return d == null ? "" : String(d).trim(); } function C(d) { return L(d).replace(/\s+/g, " "); } function I(d) { return L(d).replace(/^\/+|\/+$/g, ""); } function V(d) { return d = L(d), !d || (d = d.replace(/^[a-z]+:\/\/[^/]+/i, ""), d = d.replace(/[?#].*$/, ""), !d) ? "" : (d.charAt(0) !== "/" && (d = "/" + d), d.length > 1 && (d = d.replace(/\/+$/, "")), d); } function G(d) { return d = C(d).toLowerCase(), d === "ai" ? "ai" : d === "convert" || d === "cv" ? "convert" : "base"; } function ue(d) { return d = G(d), d === "ai" ? "Dịch AI" : d === "convert" ? "Convert" : "Bản Dịch"; } function z(d) { var s = V(d); if (!s || s.indexOf("/doc-truyen/") !== 0)
                                            return null; var g = s.substring(12).split("/").filter(Boolean), l = "base"; g[0] === "ai" ? (l = "ai", g.shift()) : g[0] === "cv" && (l = "convert", g.shift()); var f = I(g.shift()); if (!f)
                                            return null; var c = { edition: l, slug: f, kind: "detail", pageNo: 1, chapterSegment: "" }; return g.length === 0 ? c : /^trang-\d+$/.test(g[0]) ? (c.kind = "page", c.pageNo = parseInt(g[0].replace("trang-", ""), 10) || 1, c) : (c.kind = "chapter", c.chapterSegment = I(g.join("/")), c); } function W(d) { if (!d || !d.slug)
                                            return ""; var s = "/doc-truyen", g = G(d.edition); if (g === "ai" && (s += "/ai"), g === "convert" && (s += "/cv"), s += "/" + I(d.slug), d.kind === "page") {
                                            var l = parseInt(d.pageNo, 10) || 1;
                                            return l > 1 && (s += "/trang-" + l), s;
                                        } return d.kind === "chapter" && d.chapterSegment && (s += "/" + I(d.chapterSegment)), s; } function P(d) { return d ? W({ edition: d.edition, slug: d.slug, kind: "detail" }) : ""; } function Y(d) { return d = L(d), d ? /^https?:\/\//i.test(d) ? d : U + V(d) : ""; } function re(d, s) { var g = [], l = {}, f = s && s.slug ? I(s.slug) : ""; return d.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (c) { var p = z(c.attr("href")); if (!(!p || p.kind !== "detail") && !(f && p.slug !== f)) {
                                            var m = P(p), y = C(c.text()) || ue(p.edition), w = l[m];
                                            if (w != null) {
                                                y.length > g[w].title.length && (g[w].title = y);
                                                return;
                                            }
                                            l[m] = g.length, g.push({ title: y, route: p, key: m });
                                        } }), g; } function ge(d, s) { var g = [], l = P(s); return re(d, s).forEach(function (f) { !f || f.key === l || g.push(f); }), g; } function K(d) { var s = d.select("div:has(> span:contains(Chương))").last(); return s ? C(s.text()) : ""; } function S(d, s) {
                                            return __awaiter(this, void 0, void 0, function () { var g, l, f, c, p, m, y; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (d = L(d), !d)
                                                            return [2, i.success([])];
                                                        g = parseInt(s || "1", 10);
                                                        (!g || g < 1) && (g = 1);
                                                        return [4, t(U + "/tim-kiem?q=" + encodeURIComponent(d) + "&page=" + g)];
                                                    case 1:
                                                        l = _a.sent();
                                                        if (!l.ok)
                                                            return [2, i.error("HTTP " + l.status)];
                                                        f = l.html(), c = f.select("main a:contains(Trang sau)").attr("href"), p = c.match(/[?&]page=(\d+)/), m = p ? p[1] : "", y = [];
                                                        return [2, (f.select("main a.group[href^=/doc-truyen/]").forEach(function (w) { var k = C(w.select("h3").text()), B = V(w.attr("href")); !k || !B || y.push({ name: k, link: B, host: U, cover: Y(w.select("img").attr("src")), description: K(w) }); }), i.success(y, m))];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                F && (U = F);
                                            }
                                            catch (d) { }
                                            return [2, typeof S == "function" ? S : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, page: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, o, h, b, v, D, A, E, q, M, J, ee, ce) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                F = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(f) { return f == null ? "" : String(f).trim(); } function C(f) { return L(f).replace(/\s+/g, " "); } function I(f) { return L(f).replace(/^\/+|\/+$/g, ""); } function V(f) { return f = L(f), !f || (f = f.replace(/^[a-z]+:\/\/[^/]+/i, ""), f = f.replace(/[?#].*$/, ""), !f) ? "" : (f.charAt(0) !== "/" && (f = "/" + f), f.length > 1 && (f = f.replace(/\/+$/, "")), f); } function G(f) { return f = C(f).toLowerCase(), f === "ai" ? "ai" : f === "convert" || f === "cv" ? "convert" : "base"; } function ue(f) { return f = G(f), f === "ai" ? "Dịch AI" : f === "convert" ? "Convert" : "Bản Dịch"; } function z(f) { var c = V(f); if (!c || c.indexOf("/doc-truyen/") !== 0)
                                            return null; var p = c.substring(12).split("/").filter(Boolean), m = "base"; p[0] === "ai" ? (m = "ai", p.shift()) : p[0] === "cv" && (m = "convert", p.shift()); var y = I(p.shift()); if (!y)
                                            return null; var w = { edition: m, slug: y, kind: "detail", pageNo: 1, chapterSegment: "" }; return p.length === 0 ? w : /^trang-\d+$/.test(p[0]) ? (w.kind = "page", w.pageNo = parseInt(p[0].replace("trang-", ""), 10) || 1, w) : (w.kind = "chapter", w.chapterSegment = I(p.join("/")), w); } function W(f) { if (!f || !f.slug)
                                            return ""; var c = "/doc-truyen", p = G(f.edition); if (p === "ai" && (c += "/ai"), p === "convert" && (c += "/cv"), c += "/" + I(f.slug), f.kind === "page") {
                                            var m = parseInt(f.pageNo, 10) || 1;
                                            return m > 1 && (c += "/trang-" + m), c;
                                        } return f.kind === "chapter" && f.chapterSegment && (c += "/" + I(f.chapterSegment)), c; } function P(f) { return f ? W({ edition: f.edition, slug: f.slug, kind: "detail" }) : ""; } function Y(f) { return f = L(f), f ? /^https?:\/\//i.test(f) ? f : U + V(f) : ""; } function re(f, c) { var p = [], m = {}, y = c && c.slug ? I(c.slug) : ""; return f.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (w) { var k = z(w.attr("href")); if (!(!k || k.kind !== "detail") && !(y && k.slug !== y)) {
                                            var B = P(k), Q = C(w.text()) || ue(k.edition), ne = m[B];
                                            if (ne != null) {
                                                Q.length > p[ne].title.length && (p[ne].title = Q);
                                                return;
                                            }
                                            m[B] = p.length, p.push({ title: Q, route: k, key: B });
                                        } }), p; } function ge(f, c) { var p = [], m = P(c); return re(f, c).forEach(function (y) { !y || y.key === m || p.push(y); }), p; } function K(f) { var c = C(f).replace(/[^0-9]/g, ""); return c ? parseInt(c, 10) : 0; } function S(f) { return f.select("section:has(h2:contains(Danh sách chương))").first(); } function d(f) { if (!f)
                                            return 0; var c = 0, p = C(f.text()).match(/(\d[\d\.,]*)\s*Chương/i); p && (c = K(p[1])); var m = 0; return f.select("button").forEach(function (y) { var w = C(y.text()).match(/(\d[\d\.,]*)\s*-\s*(\d[\d\.,]*)/); if (w) {
                                            var k = K(w[2]);
                                            k > m && (m = k);
                                        } }), Math.max(c, m); } function s(f) { if (!f)
                                            return 50; var c = f.select("a[href*=/chuong-]").size(); return c > 0 ? c : 50; } function g(f) { var c = S(f), p = d(c); if (!p)
                                            return 1; var m = s(c), y = Math.ceil(p / m); return y > 0 ? y : 1; } function l(f) {
                                            return __awaiter(this, void 0, void 0, function () { var c, p, m, y, w, k; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        c = z(f);
                                                        if (!c)
                                                            return [2, i.error("URL truyện không hợp lệ.")];
                                                        p = P(c);
                                                        return [4, t(Y(p))];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            return [2, i.error("HTTP " + m.status)];
                                                        for (y = g(m.html()), w = [], k = 1; k <= y; k++)
                                                            w.push(W({ edition: c.edition, slug: c.slug, kind: k === 1 ? "detail" : "page", pageNo: k }));
                                                        return [2, i.success(w)];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                F && (U = F);
                                            }
                                            catch (f) { }
                                            return [2, typeof l == "function" ? l : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, toc: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, o, h, b, v, D, A, E, q, M, J, ee, ce) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                F = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(d) { return d == null ? "" : String(d).trim(); } function C(d) { return L(d).replace(/\s+/g, " "); } function I(d) { return L(d).replace(/^\/+|\/+$/g, ""); } function V(d) { return d = L(d), !d || (d = d.replace(/^[a-z]+:\/\/[^/]+/i, ""), d = d.replace(/[?#].*$/, ""), !d) ? "" : (d.charAt(0) !== "/" && (d = "/" + d), d.length > 1 && (d = d.replace(/\/+$/, "")), d); } function G(d) { return d = C(d).toLowerCase(), d === "ai" ? "ai" : d === "convert" || d === "cv" ? "convert" : "base"; } function ue(d) { return d = G(d), d === "ai" ? "Dịch AI" : d === "convert" ? "Convert" : "Bản Dịch"; } function z(d) { var s = V(d); if (!s || s.indexOf("/doc-truyen/") !== 0)
                                            return null; var g = s.substring(12).split("/").filter(Boolean), l = "base"; g[0] === "ai" ? (l = "ai", g.shift()) : g[0] === "cv" && (l = "convert", g.shift()); var f = I(g.shift()); if (!f)
                                            return null; var c = { edition: l, slug: f, kind: "detail", pageNo: 1, chapterSegment: "" }; return g.length === 0 ? c : /^trang-\d+$/.test(g[0]) ? (c.kind = "page", c.pageNo = parseInt(g[0].replace("trang-", ""), 10) || 1, c) : (c.kind = "chapter", c.chapterSegment = I(g.join("/")), c); } function W(d) { if (!d || !d.slug)
                                            return ""; var s = "/doc-truyen", g = G(d.edition); if (g === "ai" && (s += "/ai"), g === "convert" && (s += "/cv"), s += "/" + I(d.slug), d.kind === "page") {
                                            var l = parseInt(d.pageNo, 10) || 1;
                                            return l > 1 && (s += "/trang-" + l), s;
                                        } return d.kind === "chapter" && d.chapterSegment && (s += "/" + I(d.chapterSegment)), s; } function P(d) { return d ? W({ edition: d.edition, slug: d.slug, kind: "detail" }) : ""; } function Y(d) { return d = L(d), d ? /^https?:\/\//i.test(d) ? d : U + V(d) : ""; } function re(d, s) { var g = [], l = {}, f = s && s.slug ? I(s.slug) : ""; return d.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (c) { var p = z(c.attr("href")); if (!(!p || p.kind !== "detail") && !(f && p.slug !== f)) {
                                            var m = P(p), y = C(c.text()) || ue(p.edition), w = l[m];
                                            if (w != null) {
                                                y.length > g[w].title.length && (g[w].title = y);
                                                return;
                                            }
                                            l[m] = g.length, g.push({ title: y, route: p, key: m });
                                        } }), g; } function ge(d, s) { var g = [], l = P(s); return re(d, s).forEach(function (f) { !f || f.key === l || g.push(f); }), g; } function K(d) { var s = d.select("span"); if (!s || s.size() === 0)
                                            return C(d.text()); var g = C(s.first().text()); if (!g)
                                            return C(d.text()); var l = C(s.last().text()); return !l || l === g ? g : l.indexOf(g) === 0 ? l : g + " " + l; } function S(d) {
                                            return __awaiter(this, void 0, void 0, function () { var s, g, l, f, c, p, m; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        s = z(d);
                                                        if (!s)
                                                            return [2, i.error("URL truyện không hợp lệ.")];
                                                        g = W({ edition: s.edition, slug: s.slug, kind: s.kind === "page" ? "page" : "detail", pageNo: s.pageNo || 1 });
                                                        return [4, t(Y(g))];
                                                    case 1:
                                                        l = _a.sent();
                                                        if (!l.ok)
                                                            return [2, i.error("HTTP " + l.status)];
                                                        f = l.html(), c = f.select("section:has(h2:contains(Danh sách chương))").first(), p = c ? c.select("a[href*=/chuong-]") : f.select("a[href*=/chuong-]"), m = [];
                                                        return [2, (p.forEach(function (y) { var w = z(y.attr("href")); !w || w.kind !== "chapter" || (w.edition = s.edition, m.push({ name: K(y), url: W(w), host: U })); }), i.success(m))];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                F && (U = F);
                                            }
                                            catch (d) { }
                                            return [2, typeof S == "function" ? S : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, chap: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, o, h, b, v, D, A, E, q, M, J, ee, ce) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                F = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(S) { return S == null ? "" : String(S).trim(); } function C(S) { return L(S).replace(/\s+/g, " "); } function I(S) { return L(S).replace(/^\/+|\/+$/g, ""); } function V(S) { return S = L(S), !S || (S = S.replace(/^[a-z]+:\/\/[^/]+/i, ""), S = S.replace(/[?#].*$/, ""), !S) ? "" : (S.charAt(0) !== "/" && (S = "/" + S), S.length > 1 && (S = S.replace(/\/+$/, "")), S); } function G(S) { return S = C(S).toLowerCase(), S === "ai" ? "ai" : S === "convert" || S === "cv" ? "convert" : "base"; } function ue(S) { return S = G(S), S === "ai" ? "Dịch AI" : S === "convert" ? "Convert" : "Bản Dịch"; } function z(S) { var d = V(S); if (!d || d.indexOf("/doc-truyen/") !== 0)
                                            return null; var s = d.substring(12).split("/").filter(Boolean), g = "base"; s[0] === "ai" ? (g = "ai", s.shift()) : s[0] === "cv" && (g = "convert", s.shift()); var l = I(s.shift()); if (!l)
                                            return null; var f = { edition: g, slug: l, kind: "detail", pageNo: 1, chapterSegment: "" }; return s.length === 0 ? f : /^trang-\d+$/.test(s[0]) ? (f.kind = "page", f.pageNo = parseInt(s[0].replace("trang-", ""), 10) || 1, f) : (f.kind = "chapter", f.chapterSegment = I(s.join("/")), f); } function W(S) { if (!S || !S.slug)
                                            return ""; var d = "/doc-truyen", s = G(S.edition); if (s === "ai" && (d += "/ai"), s === "convert" && (d += "/cv"), d += "/" + I(S.slug), S.kind === "page") {
                                            var g = parseInt(S.pageNo, 10) || 1;
                                            return g > 1 && (d += "/trang-" + g), d;
                                        } return S.kind === "chapter" && S.chapterSegment && (d += "/" + I(S.chapterSegment)), d; } function P(S) { return S ? W({ edition: S.edition, slug: S.slug, kind: "detail" }) : ""; } function Y(S) { return S = L(S), S ? /^https?:\/\//i.test(S) ? S : U + V(S) : ""; } function re(S, d) { var s = [], g = {}, l = d && d.slug ? I(d.slug) : ""; return S.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (f) { var c = z(f.attr("href")); if (!(!c || c.kind !== "detail") && !(l && c.slug !== l)) {
                                            var p = P(c), m = C(f.text()) || ue(c.edition), y = g[p];
                                            if (y != null) {
                                                m.length > s[y].title.length && (s[y].title = m);
                                                return;
                                            }
                                            g[p] = s.length, s.push({ title: m, route: c, key: p });
                                        } }), s; } function ge(S, d) { var s = [], g = P(d); return re(S, d).forEach(function (l) { !l || l.key === g || s.push(l); }), s; } function K(S) {
                                            return __awaiter(this, void 0, void 0, function () { var d, s, g, l, f; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        d = z(S);
                                                        if (!d)
                                                            return [2, i.error("URL chương không hợp lệ.")];
                                                        return [4, t(Y(W(d)))];
                                                    case 1:
                                                        s = _a.sent();
                                                        if (!s.ok)
                                                            return [2, i.error("HTTP " + s.status)];
                                                        g = s.html(), l = g.select("section.prose-novel").first() || g.select("[itemprop=text]").first() || g.select("[itemProp=text]").first();
                                                        if (!l)
                                                            return [2, i.error("Không tìm thấy nội dung chương.")];
                                                        l.select("script,style,button,nav").remove();
                                                        f = l.select("div").first();
                                                        return [2, i.success(f ? f.html() : l.html(), C(g.select("main h1").first().text()))];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                F && (U = F);
                                            }
                                            catch (S) { }
                                            return [2, typeof K == "function" ? K : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, edition: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, o, h, b, v, D, A, E, q, M, J, ee, ce) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                F = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(s) { return s == null ? "" : String(s).trim(); } function C(s) { return L(s).replace(/\s+/g, " "); } function I(s) { return L(s).replace(/^\/+|\/+$/g, ""); } function V(s) { return s = L(s), !s || (s = s.replace(/^[a-z]+:\/\/[^/]+/i, ""), s = s.replace(/[?#].*$/, ""), !s) ? "" : (s.charAt(0) !== "/" && (s = "/" + s), s.length > 1 && (s = s.replace(/\/+$/, "")), s); } function G(s) { return s = C(s).toLowerCase(), s === "ai" ? "ai" : s === "convert" || s === "cv" ? "convert" : "base"; } function ue(s) { return s = G(s), s === "ai" ? "Dịch AI" : s === "convert" ? "Convert" : "Bản Dịch"; } function z(s) { var g = V(s); if (!g || g.indexOf("/doc-truyen/") !== 0)
                                            return null; var l = g.substring(12).split("/").filter(Boolean), f = "base"; l[0] === "ai" ? (f = "ai", l.shift()) : l[0] === "cv" && (f = "convert", l.shift()); var c = I(l.shift()); if (!c)
                                            return null; var p = { edition: f, slug: c, kind: "detail", pageNo: 1, chapterSegment: "" }; return l.length === 0 ? p : /^trang-\d+$/.test(l[0]) ? (p.kind = "page", p.pageNo = parseInt(l[0].replace("trang-", ""), 10) || 1, p) : (p.kind = "chapter", p.chapterSegment = I(l.join("/")), p); } function W(s) { if (!s || !s.slug)
                                            return ""; var g = "/doc-truyen", l = G(s.edition); if (l === "ai" && (g += "/ai"), l === "convert" && (g += "/cv"), g += "/" + I(s.slug), s.kind === "page") {
                                            var f = parseInt(s.pageNo, 10) || 1;
                                            return f > 1 && (g += "/trang-" + f), g;
                                        } return s.kind === "chapter" && s.chapterSegment && (g += "/" + I(s.chapterSegment)), g; } function P(s) { return s ? W({ edition: s.edition, slug: s.slug, kind: "detail" }) : ""; } function Y(s) { return s = L(s), s ? /^https?:\/\//i.test(s) ? s : U + V(s) : ""; } function re(s, g) { var l = [], f = {}, c = g && g.slug ? I(g.slug) : ""; return s.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (p) { var m = z(p.attr("href")); if (!(!m || m.kind !== "detail") && !(c && m.slug !== c)) {
                                            var y = P(m), w = C(p.text()) || ue(m.edition), k = f[y];
                                            if (k != null) {
                                                w.length > l[k].title.length && (l[k].title = w);
                                                return;
                                            }
                                            f[y] = l.length, l.push({ title: w, route: m, key: y });
                                        } }), l; } function ge(s, g) { var l = [], f = P(g); return re(s, g).forEach(function (c) { !c || c.key === f || l.push(c); }), l; } function K(s) { return s ? C(s.text()) : ""; } function S(s, g) { var l = K(s.select("main header h1").first()), f = Y(s.select("main header img").attr("src")), c = []; return ge(s, g).forEach(function (p) { c.push({ name: l ? l + " - " + p.title : p.title, link: p.key, host: U, cover: f, description: "Phiên bản: " + p.title }); }), c; } function d(s) {
                                            return __awaiter(this, void 0, void 0, function () { var g, l; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        g = z(s);
                                                        if (!g)
                                                            return [2, i.error("URL truyện không hợp lệ.")];
                                                        return [4, t(Y(P(g)))];
                                                    case 1:
                                                        l = _a.sent();
                                                        return [2, l.ok ? i.success(S(l.html(), g)) : i.error("HTTP " + l.status)];
                                                }
                                            }); });
                                        } var U; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                F && (U = F);
                                            }
                                            catch (s) { }
                                            return [2, typeof d == "function" ? d : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    }, gen: function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2, (function (t, r, n, i, a, o, h, b, v, D, A, E, q, M, J, ee, ce) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                F = u("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function L(l) { return l == null ? "" : String(l).trim(); } function C(l) { return L(l).replace(/\s+/g, " "); } function I(l) { return L(l).replace(/^\/+|\/+$/g, ""); } function V(l) { return l = L(l), !l || (l = l.replace(/^[a-z]+:\/\/[^/]+/i, ""), l = l.replace(/[?#].*$/, ""), !l) ? "" : (l.charAt(0) !== "/" && (l = "/" + l), l.length > 1 && (l = l.replace(/\/+$/, "")), l); } function G(l) { return l = C(l).toLowerCase(), l === "ai" ? "ai" : l === "convert" || l === "cv" ? "convert" : "base"; } function ue(l) { return l = G(l), l === "ai" ? "Dịch AI" : l === "convert" ? "Convert" : "Bản Dịch"; } function z(l) { var f = V(l); if (!f || f.indexOf("/doc-truyen/") !== 0)
                                            return null; var c = f.substring(12).split("/").filter(Boolean), p = "base"; c[0] === "ai" ? (p = "ai", c.shift()) : c[0] === "cv" && (p = "convert", c.shift()); var m = I(c.shift()); if (!m)
                                            return null; var y = { edition: p, slug: m, kind: "detail", pageNo: 1, chapterSegment: "" }; return c.length === 0 ? y : /^trang-\d+$/.test(c[0]) ? (y.kind = "page", y.pageNo = parseInt(c[0].replace("trang-", ""), 10) || 1, y) : (y.kind = "chapter", y.chapterSegment = I(c.join("/")), y); } function W(l) { if (!l || !l.slug)
                                            return ""; var f = "/doc-truyen", c = G(l.edition); if (c === "ai" && (f += "/ai"), c === "convert" && (f += "/cv"), f += "/" + I(l.slug), l.kind === "page") {
                                            var p = parseInt(l.pageNo, 10) || 1;
                                            return p > 1 && (f += "/trang-" + p), f;
                                        } return l.kind === "chapter" && l.chapterSegment && (f += "/" + I(l.chapterSegment)), f; } function P(l) { return l ? W({ edition: l.edition, slug: l.slug, kind: "detail" }) : ""; } function Y(l) { return l = L(l), l ? /^https?:\/\//i.test(l) ? l : U + V(l) : ""; } function re(l, f) { var c = [], p = {}, m = f && f.slug ? I(f.slug) : ""; return l.select("div:has(> div > span:contains(Phiên bản)) a[href^=/doc-truyen/]").forEach(function (y) { var w = z(y.attr("href")); if (!(!w || w.kind !== "detail") && !(m && w.slug !== m)) {
                                            var k = P(w), B = C(y.text()) || ue(w.edition), Q = p[k];
                                            if (Q != null) {
                                                B.length > c[Q].title.length && (c[Q].title = B);
                                                return;
                                            }
                                            p[k] = c.length, c.push({ title: B, route: w, key: k });
                                        } }), c; } function ge(l, f) { var c = [], p = P(f); return re(l, f).forEach(function (m) { !m || m.key === p || c.push(m); }), c; } function S(l, f) { return l.indexOf("list:") === 0 ? U + "/api/lists/" + l.replace("list:", "") + "?page=" + f + "&size=" + K : l.indexOf("category:") === 0 ? U + "/api/categories/" + l.replace("category:", "") + "?page=" + f + "&size=" + K : ""; } function d(l) { var f = []; return l.author && f.push(C(l.author)), l.latest_chapter_number && f.push("Chương " + l.latest_chapter_number), l.status === "completed" && f.push("Full"), l.status === "ongoing" && f.push("Đang ra"), f.join(" | "); } function s(l) { return { name: C(l.title), link: W({ edition: "base", slug: l.slug, kind: "detail" }), host: U, cover: Y(l.image_url), description: d(l) }; } function g(l, f) {
                                            return __awaiter(this, void 0, void 0, function () { var c, p, m, y, w, k, B, Q; return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        l = C(l);
                                                        c = parseInt(f || "1", 10);
                                                        (!c || c < 1) && (c = 1);
                                                        p = S(l, c);
                                                        if (!p)
                                                            return [2, i.error("Input không hợp lệ.")];
                                                        return [4, t(p)];
                                                    case 1:
                                                        m = _a.sent();
                                                        if (!m.ok)
                                                            return [2, i.error("HTTP " + m.status)];
                                                        y = m.json(), w = y && y.items ? y.items : [], k = [];
                                                        w.forEach(function (ne) { !ne || !ne.slug || !ne.title || k.push(s(ne)); });
                                                        B = y && y.total ? parseInt(y.total, 10) : 0, Q = "";
                                                        return [2, (B > c * K && (Q = String(c + 1)), !Q && !B && w.length === K && (Q = String(c + 1)), i.success(k, Q))];
                                                }
                                            }); });
                                        } var U, K; return __generator(this, function (_a) {
                                            U = "https://truyendich.store";
                                            try {
                                                F && (U = F);
                                            }
                                            catch (l) { }
                                            K = 20;
                                            return [2, typeof g == "function" ? g : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _a.sent()];
                        }
                    }); });
                })(e.fetch, e.Http, e.Html, e.Response, e.localStorage, e.cacheStorage, e.localConfig, e.localCookie, e.sleep, e.Log, e.console, e.Console, e.log, e.UserAgent, e.Engine, e.Graphics, e.Script)];
        }); });
    } };
function Jr(e) { return new Pu({ meta: ve, scripts: Xr, host: e }); }
var qn = require("@libs/fetch").fetchApi, cu = null;
try {
    cu = require("@libs/storage");
}
catch (e) {
    cu = null;
}
var Rt = {}, Fu = cu && cu.storage ? cu.storage : { get: function (e) { return Rt[e]; }, set: function (e, u) { Rt[e] = u; }, delete: function (e) { delete Rt[e]; } }, Pt = (function () {
    function class_2() {
        var _this = this;
        this.id = ve.lnId, this.name = ve.name, this.icon = ve.lnIcon, this.site = ve.source, this.version = ve.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Jr({ name: "LNReader", request: function (u) { return __awaiter(_this, void 0, void 0, function () {
                var t, r, n;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            t = { method: u.method, headers: u.headers };
                            u.body != null && u.method !== "GET" && (t.body = u.body);
                            return [4, qn(u.url, t)];
                        case 1:
                            r = _b.sent(), n = {};
                            try {
                                r.headers.forEach(function (i, a) { n[a] = i; });
                            }
                            catch (i) { }
                            _a = { status: r.status, url: r.url || u.url, headers: n };
                            return [4, r.text()];
                        case 2: return [2, (_a.text = _b.sent(), _a)];
                    }
                });
            }); }, storageGet: function (u) { var t = Fu.get("vb_" + u); return t == null ? null : String(t); }, storageSet: function (u, t) { t == null ? Fu.delete && Fu.delete("vb_" + u) : Fu.set("vb_" + u, String(t)); }, config: function (u) { return null; }, log: function (u) { return console.log(u); } });
    }
    class_2.prototype.popularNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(t && t.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(u)];
                case 1:
                    _a = _b.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(u)];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4: return [2, (_a).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (u, t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.search(u, t)];
                case 1: return [2, (_a.sent()).items.map(function (n) { return ({ name: n.name, path: n.link, cover: n.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (u) {
        return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.detail(u)];
                case 1:
                    t = _a.sent();
                    return [4, this.engine.chapters(u)];
                case 2:
                    r = _a.sent();
                    return [2, { path: u, name: t.name || "Untitled", cover: t.cover, summary: t.description, author: t.author, status: t.ongoing ? "Ongoing" : "Completed", genres: t.genres.join(","), chapters: r.map(function (n, i) { return ({ name: n.name, path: n.url, chapterNumber: i + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, this.engine.content(u)];
                case 1: return [2, (_a.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (u, t) { return /^https?:/i.test(u) ? u : ve.source.replace(/\/+$/, "") + "/" + String(u).replace(/^\/+/, ""); };
    return class_2;
}()), In = new Pt;
